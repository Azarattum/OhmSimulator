import Manager, { IComponent } from "../common/manager.class";
import View from "../common/view.abstract";
/**Componets */
import Events from "./services/events.service";
import DeviceController from "./controllers/device.controller";
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
		const components: IComponent[] = [DeviceController, Events];
		const views: View[] = [
			new CircuitView(),
			new DeviceView("voltmeter"),
			new DeviceView("ampermeter")
		];

		this.manger = new Manager(components, views);

		const args = await this.initializeArguments();
		await this.manger.initialize(args);
	}

	/**
	 * Initializes arguments for the manager
	 */
	private async initializeArguments(): Promise<{
		[component: string]: any[];
	}> {
		if (!this.manger) {
			throw new Error("Initialize manager first!");
		}

		return {};
	}
}
