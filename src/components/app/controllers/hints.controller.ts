import Controller from "../../common/controller.abstract";
import Messages from "../models/messages.class";

/**
 * Device controller
 */
export default class Hints extends Controller<"">() {
	private template: HTMLElement | null = null;
	private persistant: HTMLElement[] = [];

	public initialize(resistance: number): void {
		this.bind();
		this.template = this.container.querySelector("template")?.content
			?.firstElementChild as HTMLElement;
	}

	/**
	 * Creates and shows a new hint box
	 * @param text Hint text
	 * @param persistant If true hint will not be hidden automatically
	 */
	public showHint(text: string, persistant: boolean = false): void {
		if (!this.template) return;

		const node = this.template.cloneNode(true) as HTMLElement;
		const span = node.querySelector(".text") as HTMLElement;
		const close = node.querySelector(".close") as HTMLElement;
		if (span) span.textContent = text;
		if (close) close.textContent = Messages.close;

		this.container.prepend(node);

		if (!persistant) {
			setTimeout(() => {
				this.container.removeChild(node);
			}, 4001);
		} else {
			this.persistant.push(node);
			node.classList.add("no-hide");
			node.addEventListener("click", () => {
				this.persistant.splice(this.persistant.indexOf(node), 1);
				node.classList.add("hidden");
				setTimeout(() => {
					try {
						this.container.removeChild(node);
					} catch {
						//Catch them all!
					}
				}, 601);
			});
		}
	}

	/**
	 * Closes all active hints
	 */
	public closeAll(): void {
		this.persistant.forEach(x => {
			x.classList.add("hidden");
			setTimeout(() => {
				if (x) {
					try {
						this.container.removeChild(x);
					} catch {
						//Catch them all!
					}
				}
			}, 601);
		});
		this.persistant = [];
	}
}
