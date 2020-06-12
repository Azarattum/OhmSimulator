import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";
import Controller from "../../common/controller.abstract";
import { IVariant } from "../models/variants.class";

/**
 * Table controller
 */
export default class Table extends Controller<"mistaken">() {
	private table: Handsontable | null = null;
	private layout: IData | null = null;
	private variant: IVariant | null = null;
	private next: HTMLButtonElement | null = null;
	private mistakes: Map<number, number> = new Map();

	public initialize(data: IData): void {
		const table = this.container.getElementsByClassName("table")[0];
		if (!table) {
			throw new Error("Table container not found!");
		}

		this.layout = data;
		this.table = this.createTable(table, data);
		this.next = this.container.getElementsByClassName(
			"next"
		)[0] as HTMLButtonElement;
	}

	public setVariant(variant: IVariant): void {
		this.variant = variant;

		//Register device validator
		Handsontable.validators.registerValidator("device", (val, callback) => {
			const { row, value } = val;
			const valid = this.layout?.meters[this.getSelectedMeter(row) - 1];

			callback(value == null || value === "" || value == valid);
			return valid;
		});

		//Register precision validator
		Handsontable.validators.registerValidator(
			"precision",
			(val, callback) => {
				const { row, value } = val;

				const valid =
					this.getSelectedMeter(row) == Meter.Ampermeter
						? this.variant?.ampermeterPrecision
						: this.variant?.voltmeterPrecision;

				callback(value == null || value === "" || value == valid);
				return valid;
			}
		);

		//Register limit validator
		Handsontable.validators.registerValidator("limit", (val, callback) => {
			const { row, value } = val;
			const valid =
				this.getSelectedMeter(row) == Meter.Ampermeter
					? (this.variant?.ampermeterStep || 0) * 5
					: (this.variant?.voltmeterStep || 0) * 5;

			callback(value == null || value === "" || value == valid);
			return valid;
		});

		//Register cost validator
		Handsontable.validators.registerValidator("cost", (val, callback) => {
			const { row, value } = val;
			const valid =
				this.getSelectedMeter(row) == Meter.Ampermeter
					? ((this.variant?.ampermeterStep || 0) * 5) / 50
					: ((this.variant?.voltmeterStep || 0) * 5) / 50;

			callback(
				value == null ||
					value === "" ||
					(+value).toFixed(1) == (+valid).toFixed(1)
			);
			return (+valid).toFixed(1);
		});

		//Register sensitivity validator
		Handsontable.validators.registerValidator(
			"sensitivity",
			(val, callback) => {
				const { row, value } = val;
				const valid =
					this.getSelectedMeter(row) == Meter.Ampermeter
						? 1 / (((this.variant?.ampermeterStep || 0) * 5) / 50)
						: 1 / (((this.variant?.voltmeterStep || 0) * 5) / 50);

				callback(
					value == null ||
						value === "" ||
						(+value).toFixed(1) == (+valid).toFixed(1)
				);
				return (+valid).toFixed(1);
			}
		);

		//Register error validator
		Handsontable.validators.registerValidator("error", (val, callback) => {
			const { row, value } = val;
			const valid =
				this.getSelectedMeter(row) == Meter.Ampermeter
					? ((this.variant?.ampermeterStep || 0) *
							5 *
							(this.variant?.ampermeterPrecision || 1)) /
					  100
					: ((this.variant?.voltmeterStep || 0) *
							5 *
							(this.variant?.voltmeterPrecision || 1)) /
					  100;

			callback(
				value == null ||
					value === "" ||
					(+value).toFixed(1) == (+valid).toFixed(1)
			);
			return (+valid).toFixed(1);
		});

		this.updateValidation(null);
	}

	private updateValidation(changes: Handsontable.CellChange[] | null): void {
		this.table?.validateRows([1, 3], valid => {
			if (!this.next) return;
			this.next.disabled = true;
			if (valid) {
				const first = this.table?.getDataAtRow(1).every(x => x);
				const second = this.table?.getDataAtRow(3).every(x => x);

				this.next.disabled = !(first && second);
			}
		});

		if (changes) {
			for (const change of changes) {
				this.registerMistake(change[0], +change[1], change[3]);
			}
		}
	}

	private getSelectedMeter(row: number): Meter {
		if (!this.variant?.isSwapped) {
			if (row == 1) {
				return Meter.Voltmeter;
			}
			if (row == 3) {
				return Meter.Ampermeter;
			}
		} else {
			if (row == 3) {
				return Meter.Voltmeter;
			}
			if (row == 1) {
				return Meter.Ampermeter;
			}
		}

		return Meter.None;
	}

	private registerMistake(row: number, col: number, value: string): void {
		if (!this.table) return;

		const validator = this.table.getCellValidator(row, col) as Function;
		if (!(validator instanceof Function)) return;
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		const correct = validator({ row, value }, () => {});

		if (correct == value) return;
		const index = row * this.table.countCols() + col;
		let current = this.mistakes.get(index) || 0;
		this.mistakes.set(index, ++current);

		this.emit("mistaken", current >= 3 ? correct : null);
	}

	private createTable(container: Element, data: IData): Handsontable {
		//Register type validator
		Handsontable.validators.registerValidator("type", (val, callback) => {
			const { value } = val;
			callback(
				value == null || value === "" || value == this.layout?.types[0]
			);
			return this.layout?.types[0];
		});

		//Register deviders validator
		Handsontable.validators.registerValidator(
			"deviders",
			(val, callback) => {
				const { value } = val;
				callback(value == null || value === "" || value == 50);
				return 50;
			}
		);

		return new Handsontable(container, {
			className: "htCenter htMiddle",
			headerTooltips: true,
			colHeaders: data.headers,
			data: data.data,
			wordWrap: true,
			licenseKey: "non-commercial-and-evaluation",
			afterChange: this.updateValidation.bind(this),
			beforeValidate: (value, row, col): any => {
				return { row, value };
			},
			allowInvalid: true,
			columns: [
				{
					type: "dropdown",
					source: data.meters,
					validator: "device"
				},
				{
					type: "dropdown",
					source: data.types,
					validator: "type"
				},
				{
					type: "numeric",
					validator: "precision"
				},
				{
					type: "numeric",
					validator: "deviders"
				},
				{
					type: "numeric",
					validator: "limit"
				},
				{
					type: "numeric",
					validator: "cost"
				},
				{
					type: "numeric",
					validator: "sensitivity"
				},
				{
					type: "numeric",
					validator: "error"
				}
			],
			cells: (row, col, prop): object => {
				const cellProperties = {
					readOnly: false
				};

				if (row == 0 || row == 2) {
					cellProperties.readOnly = true;
				}

				return cellProperties;
			}
		});
	}
}

enum Meter {
	None,
	Voltmeter,
	Ampermeter
}

interface IData {
	headers: string[];
	subHeaders: string[];
	data: string[][];
	meters: string[];
	types: string[];
}
