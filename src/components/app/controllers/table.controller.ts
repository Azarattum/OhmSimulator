import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";
import Controller from "../../common/controller.abstract";
import { IVariant } from "../models/variants.class";

/**
 * Table controller
 */
export default class Table extends Controller<
	"mistaken" | "punished" | "done"
>() {
	private table: Handsontable | null = null;
	private layout: IData | null = null;
	private variant: IVariant | null = null;
	private next: HTMLButtonElement | null = null;
	private mistakes: Map<number, number> = new Map();
	private errors: number = 0;
	private updates: number = 0;

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
		this.errors = 0;
		this.mistakes = new Map();
		const afterExample = +(this.variant?.compact || 0) === 0;
		this.variant = variant;

		//Register deviders validator
		Handsontable.validators.registerValidator(
			"deviders",
			(val, callback) => {
				const { row, value } = val;
				const valid =
					this.getSelectedMeter(row) == Meter.Voltmeter
						? ((this.variant?.compact || 0) + 2) % 3 == 0
							? 25
							: 50
						: (this.variant?.compact || 0) % 5 == 0
						? 25
						: 50;

				callback(value == null || value === "" || value == valid);
				return valid;
			}
		);

		//Register device validator
		Handsontable.validators.registerValidator("device", (val, callback) => {
			const { row, value } = val;
			const valid = this.layout?.meters[this.getSelectedMeter(row) - 1];

			callback(value == null || value === "" || value == valid);
			return valid;
		});

		//Register unit validator
		Handsontable.validators.registerValidator("unit", (val, callback) => {
			const { row, col, value } = val;
			const source = this.table?.getCellMeta(row, col).source as string[];
			let valid = this.layout?.units[this.getSelectedMeter(row) - 1];
			valid = source.find(x => x.includes(valid || "_")) || "";

			callback(value == null || value === "" || value == valid);
			return valid;
		});

		//Register precision validator
		Handsontable.validators.registerValidator(
			"precision",
			(val, callback) => {
				const { row, value } = val;

				const valid = (this.getSelectedMeter(row) == Meter.Ampermeter
					? this.variant?.ampermeterPrecision
					: this.variant?.voltmeterPrecision
				)?.toFixed(1);

				callback(value == null || value === "" || value === valid);
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
			const deviders =
				this.getSelectedMeter(row) == Meter.Voltmeter
					? ((this.variant?.compact || 0) + 2) % 3 == 0
						? 25
						: 50
					: (this.variant?.compact || 0) % 5 == 0
					? 25
					: 50;

			const valid =
				this.getSelectedMeter(row) == Meter.Ampermeter
					? ((this.variant?.ampermeterStep || 0) * 5) / deviders
					: ((this.variant?.voltmeterStep || 0) * 5) / deviders;

			callback(
				value == null ||
					value === "" ||
					(+value).toFixed(2) == (+valid).toFixed(2)
			);
			//Return result with trimmed zeroes at the end
			return (+valid).toFixed(2).replace(/[.]?0+$/, "");
		});

		//Register sensitivity validator
		Handsontable.validators.registerValidator(
			"sensitivity",
			(val, callback) => {
				const { row, value } = val;
				const deviders =
					this.getSelectedMeter(row) == Meter.Voltmeter
						? ((this.variant?.compact || 0) + 2) % 3 == 0
							? 25
							: 50
						: (this.variant?.compact || 0) % 5 == 0
						? 25
						: 50;

				const valid =
					this.getSelectedMeter(row) == Meter.Ampermeter
						? 1 /
						  (((this.variant?.ampermeterStep || 0) * 5) / deviders)
						: 1 /
						  (((this.variant?.voltmeterStep || 0) * 5) / deviders);

				callback(
					value == null ||
						value === "" ||
						(+value).toFixed(2) == (+valid).toFixed(2)
				);
				//Return result with trimmed zeroes at the end
				return (+valid).toFixed(2).replace(/[.]?0+$/, "");
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
					(+value).toFixed(2) == (+valid).toFixed(2)
			);
			//Return result with trimmed zeroes at the end
			return (+valid).toFixed(2).replace(/[.]?0+$/, "");
		});

		//Auto fill the example
		const rows = this.table?.countRows() || 0;
		const cols = this.table?.countCols() || 0;
		if (+variant.compact === 0) {
			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < cols; col++) {
					const validator = this.table?.getCellValidator(
						row,
						col
					) as Function;
					if (!(validator instanceof Function)) continue;
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					const value = validator({ row, col }, () => {});

					this.table?.setDataAtCell(row, col, value);
				}
			}
		} else if (afterExample) {
			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < cols; col++) {
					const validator = this.table?.getCellValidator(
						row,
						col
					) as Function;
					if (!(validator instanceof Function)) continue;

					this.table?.setDataAtCell(row, col, "");
				}
			}
		} else {
			this.updateValidation(null);
		}
	}

	public getResult(): Result {
		let score = 5;
		if (this.updates > 0) {
			score -= this.updates;
			if (this.errors > 0) {
				score -= this.errors;
			}
		}

		if (score >= 5) return Result.Exellent;
		if (score == 4) return Result.Good;
		return Result.OK;
	}

	private updateValidation(changes: Handsontable.CellChange[] | null): void {
		if (+(this.variant?.compact || 0) === 0) return;

		this.table?.validateRows([0, 1, 2, 3], valid => {
			if (!this.next) return;
			this.next.disabled = true;
			if (valid) {
				let filled = +(this.variant?.compact || 0) !== 0;
				for (let i = 0; i < 4; i++) {
					filled =
						filled && !!this.table?.getDataAtRow(i).every(x => x);
				}

				this.next.disabled = !filled;
				if (filled) {
					this.emit("done", this.getResult());
				}
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
			if (row == 1 || row == 0) {
				return Meter.Voltmeter;
			}
			if (row == 3 || row == 2) {
				return Meter.Ampermeter;
			}
		} else {
			if (row == 3 || row == 2) {
				return Meter.Voltmeter;
			}
			if (row == 1 || row == 0) {
				return Meter.Ampermeter;
			}
		}

		return Meter.None;
	}

	private registerMistake(row: number, col: number, value: string): void {
		if (!this.table) return;

		const validator = this.table.getCellValidator(row, col) as Function;
		if (value === "") return;
		if (Number.isFinite(+value) && col != 2) {
			value = (+value).toFixed(2);
		}
		if (!(validator instanceof Function)) return;
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		const correct = validator({ row, col, value }, () => {});

		if (correct == value) return;
		const index = row * this.table.countCols() + col;
		let current = this.mistakes.get(index) || 0;
		this.mistakes.set(index, ++current);

		this.emit("mistaken", current >= 3 ? correct : null);
		if (current == 3) {
			this.errors++;
		}
		if (this.errors == 2) {
			this.updates++;
			this.emit("punished");
		}
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

		const table = new Handsontable(container, {
			className: "htCenter htMiddle",
			headerTooltips: true,
			colHeaders: data.headers,
			data: data.data,
			wordWrap: true,
			licenseKey: "non-commercial-and-evaluation",
			afterChange: this.updateValidation.bind(this),
			beforeValidate: (value, row, col): any => {
				return { row, col, value };
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
					validator: "type",
					width: 196
				},
				{
					type: "text",
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
				const cellProperties: any = {};

				if (row == 0 || row == 2) {
					if (col == 4 || col == 7) {
						cellProperties.type = "dropdown";
						cellProperties.source = data.units;
						cellProperties.validator = "unit";
					} else if (col == 5) {
						cellProperties.type = "dropdown";
						cellProperties.source = data.costUnits;
						cellProperties.validator = "unit";
					} else if (col == 6) {
						cellProperties.type = "dropdown";
						cellProperties.source = data.precisionUnits;
						cellProperties.validator = "unit";
					} else {
						cellProperties.type = "text";
						cellProperties.readOnly = true;
						cellProperties.validator = null;
					}
				}

				return cellProperties;
			}
		});

		return table;
	}
}

export enum Result {
	OK,
	Good,
	Exellent
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
	units: string[];
	costUnits: string[];
	precisionUnits: string[];
}
