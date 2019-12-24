import Service from "../../common/service.abstract";

/**
 * Power controller
 */
export default class Power extends Service<"voltageChanged">() {
	public static voltage: number;

	private static maximum: number;
	private static step: number;

	public static initialize(
		maximum: number = 100,
		precision: number = 10
	): void {
		this.voltage = 0;
		this.maximum = maximum;
		this.step = maximum / precision;

		this.expose("updateVoltage");
	}

	/**
	 * Update power voltage
	 */
	public static updateVoltage(): void {
		this.voltage += this.step;
		if (this.voltage > this.maximum) {
			this.voltage = 0;
		}

		this.container.style.setProperty(
			"--level",
			(this.voltage / this.maximum).toString()
		);

		this.call("voltageChanged", this.voltage);
	}

	/**
	 * Associated container
	 */
	protected static get container(): HTMLElement {
		const container = document.querySelector(
			`[controller=${(this as any).name.toLowerCase()}]`
		);

		if (!container) {
			throw new Error(`Container ${(this as any).name} not found!`);
		}

		return container as HTMLElement;
	}
}
