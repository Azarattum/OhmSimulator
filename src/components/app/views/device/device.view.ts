import "./device.scss";
import Template from "./device.pug";
import View from "../../../common/view.abstract";

/**
 * Device view
 */
export default class Device extends View {
	public constructor() {
		super("Device");

		this.template = Template;
	}

	public toggle(visible: boolean | null = null): void {
		super.toggle(visible);
		///Override here
	}
}
