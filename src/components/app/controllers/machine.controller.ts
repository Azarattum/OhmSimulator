import Controller from "../../common/controller.abstract";

/**
 * Machine controller
 */
export default class Machine extends Controller<
	"resistorChanged" | "powered" | "ready" | "activated"
>() {
	private resistors: HTMLElement | null = null;
	private slot: HTMLElement | null = null;
	private circuit: HTMLElement | null = null;
	private active: boolean = false;
	private validResistance: number = 50;

	public initialize(): void {
		this.bind();
		this.resistors = this.container.querySelector(".resistors");
		this.circuit = this.container.querySelector(".circuit");
		this.slot = this.container.querySelector(".slot");
		this.data.resistor = "false";

		this.expose("activate");
		this.expose("dragResistor");
		this.expose("dropResistor");
		this.expose("allowDrop");
		this.expose("setResistor");
		this.expose("updateStage");
	}

	public updateStage(): void {
		const power = this.data.power;
		setTimeout(() => {
			this.circuit?.classList.remove("active");
			if (this.data.power == "false") return;
			if (power == "false") this.emit("powered");
			if (!this.slot?.children.length) return;
			if (this.data.resistor == "false") return;
			if (this.data.clamps.left == "false") return;
			if (this.data.clamps.right == "false") return;
			if (this.data.voltage == "false") return;

			this.emit("ready");
			this.circuit?.classList.add("active");
		}, 0);
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
		const resistance = event.dataTransfer?.getData("resistance");
		if (!resistance || !Number.isInteger(+resistance)) return;
		this.setResistor(+resistance);
	}

	public setResistance(resistance: number): void {
		this.validResistance = +resistance;
		console.log(resistance);
	}

	public setResistor(resistance: number): void {
		if (!this.slot) return;
		if (
			this.data.clamps.left == "true" ||
			this.data.clamps.right == "true"
		) {
			return;
		}

		for (const resistor of this.slot?.children) {
			this.resistors?.appendChild(resistor);
		}

		const element = this.container.querySelector(
			`[data-resistance="${resistance}"]`
		);
		if (element) {
			this.slot.appendChild(element);
			console.log(resistance);
			if (+resistance === this.validResistance) {
				this.data.resistor = "true";
			} else {
				this.data.resistor = "false";
			}
			this.emit(
				"resistorChanged",
				resistance,
				this.data.resistor == "true"
			);
		}
	}

	public allowDrop(event: DragEvent): void {
		if (
			this.data.clamps.left == "false" &&
			this.data.clamps.right == "false"
		) {
			event.preventDefault();
		}
	}

	/**
	 * Activates the machine and moves to the next stage
	 */
	public activate(): void {
		if (this.active) return;
		if (!this.slot?.children.length) return;
		if (this.data.resistor == "false") return;
		if (this.data.clamps.left == "false") return;
		if (this.data.clamps.right == "false") return;
		if (this.data.voltage == "false") return;
		if (this.data.power == "false") return;
		this.active = true;

		const img = this.container.querySelector("img");
		const width = img?.clientWidth;
		if (img) {
			img.style.width = width + "px";
			setTimeout(() => {
				img.style.width = "100vw";
			}, 0);
		}

		const inactive = this.container.querySelector(".inactive");
		this.circuit?.classList.remove("active");
		inactive?.classList.remove("inactive");
		this.emit("activated");
	}
}
