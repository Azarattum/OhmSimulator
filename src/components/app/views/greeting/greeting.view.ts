import "./greeting.scss";
import Template from "./greeting.pug";
import View from "../../../common/view.abstract";

/**
 * Greeting view
 */
export default class Greeting extends View {
	public constructor() {
		super("Greeting");

		this.template = Template;
	}
}
