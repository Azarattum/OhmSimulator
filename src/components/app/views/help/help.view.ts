import "./help.scss";
import Template from "./help.pug";
import View from "../../../common/view.abstract";

/**
 * Help view
 */
export default class Help extends View {
	public constructor() {
		super("Help");

		this.template = Template;
	}
}
