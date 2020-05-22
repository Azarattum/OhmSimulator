import "./device.scss";
import Template from "./device.pug";
import View from "../../../common/view.abstract";

/**
 * Device view
 */
export default class Device extends View {
	public name: string;

	public constructor(name: string) {
		super(name);
		this.name = name;

		this.template = Template;
	}

	public render(template: Function | null = null, args: {} = {}): void {
		super.render(template, {
			name: this.name.toLocaleLowerCase(),
			...args
		});
	}
}
