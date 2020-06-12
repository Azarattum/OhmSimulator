import Controller from "../../common/controller.abstract";

/**
 * Device controller
 */
export default class Hints extends Controller<"">() {
	private template: HTMLElement | null = null;

	public initialize(resistance: number): void {
		this.bind();
		this.template = this.container.querySelector("template")?.content
			?.firstElementChild as HTMLElement;
	}

	/**
	 * Creates and shows a new hint box
	 * @param text Hint text
	 */
	public showHint(text: string): void {
		if (!this.template) return;

		const node = this.template.cloneNode(true) as HTMLElement;
		const span = node.querySelector(".text") as HTMLElement;
		if (span) span.textContent = text;

		this.container.prepend(node);

		setTimeout(() => {
			this.container.removeChild(node);
		}, 3001);
	}
}
