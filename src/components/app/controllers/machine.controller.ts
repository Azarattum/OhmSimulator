import Controller from "../../common/controller.abstract";

/**
 * Machine controller
 */
export default class Machine extends Controller<"resistorChanged">() {
	private resistors: HTMLElement | null = null;
	private slot: HTMLElement | null = null;

	public initialize(): void {
		this.bind();
		this.resistors = this.container.querySelector(".resistors");
		this.slot = this.container.querySelector(".slot");

		this.expose("activate");
		this.expose("dragResistor");
		this.expose("dropResistor");
		this.expose("allowDrop");
	}

	public dragResistor(event: DragEvent): void {
		const resistor = event.target as HTMLElement;
		event.dataTransfer?.setData(
			"resistance",
			resistor.dataset["resistance"] || ""
		);
	}

	public dropResistor(event: DragEvent): void {
		event.preventDefault();
		if (!this.slot) return;

		for (const resistor of this.slot?.children) {
			this.resistors?.appendChild(resistor);
		}

		const resistance = event.dataTransfer?.getData("resistance");
		if (!resistance) return;

		const element = this.container.querySelector(
			`[data-resistance="${resistance}"]`
		);
		if (element) {
			this.slot.appendChild(element);
			this.emit("resistorChanged", resistance);
		}
	}

	public allowDrop(event: DragEvent): void {
		if (
			this.data.terminals.left == "false" &&
			this.data.terminals.right == "false"
		) {
			event.preventDefault();
		}
	}

	/**
	 * Activates the machine and moves to the next stage
	 */
	public activate(): void {
		if (!this.slot?.children.length) return;
		if (this.data.terminals.left == "false") return;
		if (this.data.terminals.right == "false") return;

		const img = this.container.querySelector("img");
		const width = img?.clientWidth;
		if (img) {
			img.style.width = width + "px";
			setTimeout(() => {
				img.style.width = "100vw";
			}, 0);
		}

		const inactive = this.container.querySelector(".inactive");
		inactive?.classList.remove("inactive");
	}
}
