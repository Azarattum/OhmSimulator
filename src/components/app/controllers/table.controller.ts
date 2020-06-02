import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";

import Controller from "../../common/controller.abstract";
import Layout from "../models/layout.class";

/**
 * Table controller
 */
export default class Table extends Controller<"">() {
	private table: Handsontable | null = null;

	public initialize(): void {
		const table = this.container.getElementsByClassName("table")[0];
		if (!table) {
			throw new Error("Table container not found!");
		}

		this.table = this.createTable(table);
	}

	private createTable(container: Element): Handsontable {
		return new Handsontable(container, {
			className: "htCenter htMiddle",
			headerTooltips: true,
			colHeaders: Layout.headers,
			data: Layout.data,
			wordWrap: true,
			licenseKey: "non-commercial-and-evaluation",
			columns: [
				{
					type: "dropdown",
					source: Layout.meters
				},
				{
					type: "dropdown",
					source: Layout.types
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
