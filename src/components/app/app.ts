import Manager, { IComponent } from "../common/manager.class";
import View from "../common/view.abstract";
/**Componets */
import Events from "./services/events.service";
import DevicesController from "./controllers/devices.controller";
import PowerController from "./controllers/power.controller";
/**Views */
import CircuitView from "./views/circuit/circuit.view";
import DeviceView from "./views/device/device.view";

/**
 * Main application class
 */
export default class App {
	private manger: Manager | null = null;

	/**
	 * Initializes the app.
	 * Note that the page should be already loaded
	 */
	public async initialize(): Promise<void> {
		const components: IComponent[] = [
			PowerController,
			DevicesController,
			Events
		];
		const views: View[] = [
			new CircuitView(),
			new DeviceView("voltmeter"),
			new DeviceView("ampermeter")
		];

		this.manger = new Manager(components, views);

		const args = await this.initializeArguments();
		await this.manger.initialize(...args);
	}

	/**
	 * Initializes arguments for the manager
	 */
	private initializeArguments(): any[] {
		if (!this.manger) {
			throw new Error("Initialize manager first!");
		}

		return [
			{ Devices: [132], Power: [30] },
			{
				voltmeter: { ranges: [0.5, 1, 2, 3], step: 2, label: "V" },
				ampermeter: { ranges: [1, 2, 5, 20], step: 20, label: "mA" }
			}
		];
	}
}
