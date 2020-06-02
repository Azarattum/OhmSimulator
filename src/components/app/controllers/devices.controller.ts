import Controller from "../../common/controller.abstract";

/**
 * Device controller
 */
export default class Devices extends Controller<"">() {
	private voltage: number = 0;
	private resistance: number = 1;

	private voltmeter: HTMLElement | null = null;
	private ampermeter: HTMLElement | null = null;

	public initialize(resistance: number): void {
		this.resistance = resistance;
		this.voltmeter = this.container.querySelector(".device.voltmeter");
		this.ampermeter = this.container.querySelector(".device.ampermeter");

		this.expose("updateValues");
	}

	/**
	 * Sets a new resistance value
	 * @param resistance New circuit resistance
	 */
	public setResistance(resistance: number): void {
		this.resistance = resistance;
	}

	/**
	 * Updates devices values
	 * @param voltage New voltage
	 */
	public updateValues(voltage: number = this.voltage): void {
		if (this.voltmeter) {
			const scalar =
				Number.parseFloat(
					(this.voltmeter.querySelector(
						"[name='voltmeter-range']:checked"
					) as HTMLInputElement).value
				) || 1;

			let value = voltage / scalar;
			if (value > 10) value = 10.3;

			this.voltmeter.style.setProperty("--value", value.toString());
		}

		if (this.ampermeter) {
			const scalar =
				Number.parseFloat(
					(this.ampermeter.querySelector(
						"[name='ampermeter-range']:checked"
					) as HTMLInputElement).value
				) || 1;

			let value = (voltage / this.resistance / scalar) * 1000;
			if (value > 100) value = 103;

			this.ampermeter.style.setProperty("--value", value.toString());
		}

		this.voltage = voltage;
	}
}
