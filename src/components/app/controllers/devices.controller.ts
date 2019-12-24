import Service from "../../common/service.abstract";

/**
 * Device controller
 */
export default class Devices extends Service<"">() {
	private static voltage: number = 0;
	private static resistance: number;

	private static voltmeter: HTMLElement | null = null;
	private static ampermeter: HTMLElement | null = null;

	public static initialize(resistance: number): void {
		this.resistance = resistance;
		this.voltmeter = document.getElementById("voltmeter");
		this.ampermeter = document.getElementById("ampermeter");

		this.expose("updateValues");
	}

	/**
	 * Updates devices values
	 * @param voltage New voltage
	 */
	public static updateValues(voltage: number = this.voltage): void {
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
