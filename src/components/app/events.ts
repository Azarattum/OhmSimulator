import { IComponent } from "../common/manager.class";
import Power from "./controllers/power.controller";
import Devices from "./controllers/devices.controller";
import Machine from "./controllers/machine.controller";

/**
 * Event handler for application components
 */
export default class EnvetsHandler {
	private powerController: Power;
	private devicesController: Devices;
	private machineController: Machine;

	/**
	 * Creates new envet handler for components
	 * @param components Components to handle interactions with
	 */
	public constructor(components: IComponent[]) {
		const component: { [name: string]: IComponent } = {};
		components.forEach(x => (component[x.name] = x));

		//Defining all components
		this.powerController = component["Power"] as Power;
		this.devicesController = component["Devices"] as Devices;
		this.machineController = component["Machine"] as Machine;
	}

	/**
	 * Registers all events for components
	 */
	public async registerEvents(): Promise<void> {
		//Voltage changed event
		this.powerController.on("voltageChanged", (voltage: number) => {
			this.devicesController.updateValues(voltage);
		});

		//Resistor changed event
		this.machineController.on("resistorChanged", (resistance: number) => {
			this.devicesController.setResistance(resistance);
		});
	}
}
