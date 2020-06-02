import "./table.scss";
import Template from "./table.pug";
import View from "../../../common/view.abstract";

/**
 * Table view
 */
export default class Table extends View {
	public constructor() {
		super("Table");

		this.template = Template;
	}
}
