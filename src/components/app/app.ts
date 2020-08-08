import Manager, { IComponentType } from "../common/manager.class";
import Layout from "./models/layout.class";
import EnvetsHandler from "./events";
/**Componets */
import DevicesController from "./controllers/devices.controller";
import PowerController from "./controllers/power.controller";
import MachineController from "./controllers/machine.controller";
import TabsController from "./controllers/tabs.controller";
import TableController from "./controllers/table.controller";
import Table2Controller from "./controllers/table2.controller";
import VariantController from "./controllers/variant.controller";
import HintsController from "./controllers/hints.controller";
import CharterController from "./controllers/charter.controller";
/**Views */
import MachineView from "./views/machine/machine.view";
import CircuitView from "./views/circuit/circuit.view";
import DeviceView from "./views/device/device.view";
import FooterView from "./views/footer/footer.view";
import TableView from "./views/table/table.view";
import GreetingView from "./views/greeting/greeting.view";
import HelpView from "./views/help/help.view";
import Help2View from "./views/help2/help2.view";
import Help3View from "./views/help3/help3.view";
import CharterView from "./views/charter/charter.view";

/**
 * Main application class
 */
export default class App {
	private manager: Manager;

	/**
	 * Application constructor
	 */
	public constructor() {
		const components: IComponentType[] = [
			PowerController,
			DevicesController,
			MachineController,
			TabsController,
			TableController,
			Table2Controller,
			VariantController,
			HintsController,
			CharterController,
			FooterView,
			MachineView,
			CircuitView,
			CharterView,
			TableView,
			GreetingView,
			HelpView,
			Help2View,
			Help3View,
			DeviceView
		];

		this.manager = new Manager(components, {
			events: EnvetsHandler,
			scope: globalThis
		});
	}

	/**
	 * Initializes the app.
	 * Note that the page should be already loaded
	 */
	public async initialize(): Promise<void> {
		const config = {
			//Resistance
			Devices: [132],
			//Default maximum voltage
			Power: [24],
			TableCtrl: [Layout],
			Table2Ctrl: [Layout]
		};
		await this.manager.initialize(config);
	}

	/**
	 * Closes the application
	 */
	public close(): void {
		this.manager.close();
	}
}
