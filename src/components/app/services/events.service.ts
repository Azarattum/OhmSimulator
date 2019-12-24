import Service from "../../common/service.abstract";
import PowerController from "../controllers/power.controller";
import DevicesController from "../controllers/devices.controller";

/**
 * One service to rule them all!
 * Registers and manages event-driven communication
 * among all services
 */
export default class Envets extends Service<"registered">() {
	public static async initialize(): Promise<void> {
		//Register service events
		this.registerPower();

		this.call("registered");
	}

	/**
	 * Register Users service events
	 */
	private static registerPower(): void {
		PowerController.addEventListener(
			"voltageChanged",
			(voltage: number) => {
				DevicesController.updateValues(voltage);
			}
		);
	}
}
