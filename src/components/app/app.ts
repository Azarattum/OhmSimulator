import Manager, { IComponent, ComponentArgs } from "../common/manager.class";
/**Componets */
import DevicesController from "./controllers/devices.controller";
import PowerController from "./controllers/power.controller";
/**Views */
import CircuitView from "./views/circuit/circuit.view";
import DeviceView from "./views/device/device.view";
import EnvetsHandler from "./events";

/**
 * Main application class
 */
export default class App {
	private manger: Manager | null = null;
	private events: EnvetsHandler | null = null;

	/**
	 * Initializes the app.
	 * Note that the page should be already loaded
	 */
	public async initialize(): Promise<void> {
		const components: IComponent[] = [
			new PowerController(),
			new DevicesController(),
			new CircuitView(),
			new DeviceView("Voltmeter"),
			new DeviceView("Ampermeter")
		];

		this.manger = new Manager(components);
		this.events = new EnvetsHandler(components);

		const args = await this.getComponentArguments();
		await this.events.registerEvents();
		await this.manger.initialize(args);
	}

	/**
	 * Initializes arguments for the manager
	 */
	private async getComponentArguments(): Promise<ComponentArgs> {
		if (!this.manger) {
			throw new Error("Initialize manager first!");
		}

		return {
			//Resistance
			Devices: [132],
			//Maximum voltage
			Power: [30],
			Voltmeter: [
				{
					ranges: [0.5, 1, 2, 3],
					step: 2,
					label: "V",
					precision: "1.5"
				}
			],
			Ampermeter: [
				{
					ranges: [1, 2, 5, 20],
					step: 20,
					label: "mA",
					precision: "2.0"
				}
			]
		};
	}
}
