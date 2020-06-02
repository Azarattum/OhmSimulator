import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";
import Controller from "../../common/controller.abstract";
import { IVariant } from "../models/variants.class";

/**
 * Table controller
 */
export default class Table extends Controller<"">() {
	private table: Handsontable | null = null;
	private layout: IData | null = null;
	private variant: IVariant | null = null;

	public initialize(data: IData): void {
		const table = this.container.getElementsByClassName("table")[0];
		if (!table) {
			throw new Error("Table container not found!");
		}

		this.layout = data;
		this.table = this.createTable(table, data);
	}

	public setVariant(variant: IVariant): void {
		this.variant = variant;

		//Register device validator
		Handsontable.validators.registerValidator(
			"device",
			(value, callback) => {
				const valid = this.layout?.meters[this.selectedMeter - 1];

				callback(!value || value == valid);
			}
		);

		//Register precision validator
		Handsontable.validators.registerValidator(
			"precision",
			(value, callback) => {
				const valid =
					this.selectedMeter == Meter.Ampermeter
						? this.variant?.ampermeterPrecision
						: this.variant?.voltmeterPrecision;

				callback(!value || value == valid);
			}
		);

		//Register limit validator
		Handsontable.validators.registerValidator(
			"limit",
			(value, callback) => {
				const valid =
					this.selectedMeter == Meter.Ampermeter
						? (this.variant?.ampermeterStep || 0) * 5
						: (this.variant?.voltmeterStep || 0) * 5;

				callback(!value || value == valid);
			}
		);

		//Register cost validator
		Handsontable.validators.registerValidator("cost", (value, callback) => {
			const valid =
				this.selectedMeter == Meter.Ampermeter
					? ((this.variant?.ampermeterStep || 0) * 5) / 50
					: ((this.variant?.voltmeterStep || 0) * 5) / 50;

			callback(!value || value == valid);
		});

		//Register sensitivity validator
		Handsontable.validators.registerValidator(
			"sensitivity",
			(value, callback) => {
				const valid =
					this.selectedMeter == Meter.Ampermeter
						? 1 / (((this.variant?.ampermeterStep || 0) * 5) / 50)
						: 1 / (((this.variant?.voltmeterStep || 0) * 5) / 50);

				callback(!value || value == valid);
			}
		);

		//Register error validator
		Handsontable.validators.registerValidator(
			"error",
			(value, callback) => {
				const valid =
					this.selectedMeter == Meter.Ampermeter
						? ((this.variant?.ampermeterStep || 0) *
								5 *
								(this.variant?.ampermeterPrecision || 1)) /
						  100
						: ((this.variant?.voltmeterStep || 0) *
								5 *
								(this.variant?.voltmeterPrecision || 1)) /
						  100;

				callback(!value || value == valid);
			}
		);

		this.table?.validateRows([1, 3]);
	}

	private get selectedMeter(): Meter {
		const editor = this.table?.getActiveEditor();
		if (!editor || !this.variant) {
			return Meter.None;
		}
		const { row } = editor;

		if (!this.variant.isSwapped) {
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

	private createTable(container: Element, data: IData): Handsontable {
		//Register type validator
		Handsontable.validators.registerValidator("type", (value, callback) => {
			callback(!value || value == this.layout?.types[0]);
		});

		//Register deviders validator
		Handsontable.validators.registerValidator(
			"deviders",
			(value, callback) => {
				callback(!value || value == 50);
			}
		);

		return new Handsontable(container, {
			className: "htCenter htMiddle",
			headerTooltips: true,
			colHeaders: data.headers,
			data: data.data,
			wordWrap: true,
			licenseKey: "non-commercial-and-evaluation",
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
