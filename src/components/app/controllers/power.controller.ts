import Controller from "../../common/controller.abstract";

/**
 * Power controller
 */
export default class Power extends Controller<"voltageChanged">() {
	public voltage: number = 0;

	private maximum: number = 100;
	private step: number = 1;

	public initialize(maximum: number = 100, precision: number = 10): void {
		this.voltage = 0;
		this.maximum = maximum;
		this.step = maximum / precision;

		this.expose("updateVoltage");
	}

	/**
	 * Update power voltage
	 */
	public updateVoltage(): void {
		this.voltage += this.step;
		if (this.voltage > this.maximum) {
			this.voltage = 0;
		}

		this.container.style.setProperty(
			"--level",
			(this.voltage / this.maximum).toString()
		);

		this.emit("voltageChanged", this.voltage);
	}
}
