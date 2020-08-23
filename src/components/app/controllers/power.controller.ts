import Controller from "../../common/controller.abstract";

/**
 * Power controller
 */
export default class Power extends Controller<"voltageChanged">() {
	public voltage: number = 0;

	private maximum: number = 100;
	private step: number = 1;

	public initialize(maximum: number = 24, precision: number = 12): void {
		this.voltage = 0;
		this.maximum = maximum;
		this.step = maximum / precision;

		this.expose("updateVoltage");
		this.expose("updateMax");
	}

	/**
	 * Updates maximum voltage
	 * @param maximum Maximum voltage
	 */
	public updateMax(maximum: number): void {
		this.maximum = maximum;
		this.voltage = -this.step;
		this.updateVoltage();
	}

	/**
	 * Update power voltage
	 */
	public updateVoltage(up: boolean = true): void {
		this.voltage += this.step * (+up * 2 - 1);
		if (this.voltage > this.maximum) {
			this.voltage = 0;
		}
		if (this.voltage < 0) {
			this.voltage = this.maximum;
		}

		this.container.style.setProperty(
			"--level",
			(this.voltage / this.maximum).toString()
		);

		this.emit("voltageChanged", this.voltage);
	}
}
