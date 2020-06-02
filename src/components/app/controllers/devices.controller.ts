import Controller from "../../common/controller.abstract";

/**
 * Device controller
 */
export default class Devices extends Controller<"">() {
	private voltage: number = 0;
	private resistance: number = 1;

	public initialize(resistance: number): void {
		this.resistance = resistance;

		this.expose("updateValues");
	}

	private get voltmeter(): HTMLElement | null {
		return this.container.querySelector(".device.voltmeter");
	}

	private get ampermeter(): HTMLElement | null {
		return this.container.querySelector(".device.ampermeter");
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
			const limit = +this.voltmeter.style.getPropertyValue("--limit");
			if (value > limit) value = limit * 1.03;

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
			const limit = +this.ampermeter.style.getPropertyValue("--limit");
			if (value > limit) value = limit * 1.03;

			this.ampermeter.style.setProperty("--value", value.toString());
		}

		this.voltage = voltage;
	}
}
