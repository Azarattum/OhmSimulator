import "./circuit.scss";
import Template from "./circuit.pug";
import View from "../../../common/view.abstract";

/**
 * Circuit view
 */
export default class Circuit extends View {
	public constructor() {
		super("Circuit");

		this.template = Template;
	}
}