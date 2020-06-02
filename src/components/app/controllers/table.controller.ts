import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";
import Controller from "../../common/controller.abstract";

/**
 * Table controller
 */
export default class Table extends Controller<"">() {
	private table: Handsontable | null = null;

	public initialize(data: IData): void {
		const table = this.container.getElementsByClassName("table")[0];
		if (!table) {
			throw new Error("Table container not found!");
		}

		this.table = this.createTable(table, data);
	}

	private createTable(container: Element, data: IData): Handsontable {
		return new Handsontable(container, {
			className: "htCenter htMiddle",
			headerTooltips: true,
			colHeaders: data.headers,
			data: data.data,
			wordWrap: true,
			licenseKey: "non-commercial-and-evaluation",
			columns: [
				{
					type: "dropdown",
					source: data.meters
				},
				{
					type: "dropdown",
					source: data.types
				},
				{
					type: "numeric"
				},
				{
					type: "numeric"
				},
				{
					type: "numeric"
				},
				{
					type: "numeric"
				},
				{
					type: "numeric"
				},
				{
					type: "numeric"
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

interface IData {
	headers: string[];
	subHeaders: string[];
	data: string[][];
	meters: string[];
	types: string[];
}
