import "./machine.scss";
import Template from "./machine.pug";
import View from "../../../common/view.abstract";

/**
 * Machine view
 */
export default class Machine extends View {
	public constructor() {
		super("Machine");

		this.template = Template;
	}
}
