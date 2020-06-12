import { IComponent } from "../common/manager.class";
import Power from "./controllers/power.controller";
import Devices from "./controllers/devices.controller";
import Machine from "./controllers/machine.controller";
import Tabs from "./controllers/tabs.controller";
import Variant from "./controllers/variant.controller";
import Device from "./views/device/device.view";
import Variants from "./models/variants.class";
import Table from "./controllers/table.controller";
import Hints from "./controllers/hints.controller";

/**
 * Event handler for application components
 */
export default class EnvetsHandler {
	private devicesController: Devices;
	private machineController: Machine;
	private variantController: Variant;
	private powerController: Power;
	private tableController: Table;
	private tabsController: Tabs;
	private hintsController: Hints;

	private voltmeterView: Device;
	private ampermeterView: Device;

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
		this.tabsController = component["Tabs"] as Tabs;
		this.variantController = component["Variant"] as Variant;
		this.tableController = component["Table"] as Table;
		this.hintsController = component["Hints"] as Hints;

		this.voltmeterView = component["Voltmeter"] as Device;
		this.ampermeterView = component["Ampermeter"] as Device;
	}

	/**
	 * Registers all events for components
	 */
	public async registerEvents(): Promise<void> {
		//Set defaul tab
		this.tabsController.change("table");

		//Voltage changed event
		this.powerController.on("voltageChanged", (voltage: number) => {
			this.devicesController.updateValues(voltage);
		});

		//Resistor changed event
		this.machineController.on("resistorChanged", (resistance: number) => {
			this.devicesController.setResistance(resistance);
		});

		//Register variant update
		this.variantController.on("variantChanged", (id: number) => {
			const variant = Variants.get(id);

			const elements = document.querySelector("[view='table'] .elements");
			elements?.classList.toggle("swapped", variant.isSwapped);

			//Rerender views
			this.voltmeterView.render(null, {
				ranges: [0.5, 1, 2, 3],
				step: variant.voltmeterStep,
				label: "V",
				precision: variant.voltmeterPrecision.toFixed(1),
				compact: (variant.compact + 2) % 3 == 0
			});
			this.ampermeterView.render(null, {
				ranges: [1, 2, 5, 20],
				step: variant.ampermeterStep,
				label: "mA",
				precision: variant.ampermeterPrecision.toFixed(1),
				compact: variant.compact % 5 == 0
			});

			//Update table validator
			this.tableController.setVariant(variant);
		});

		this.tableController.on("mistaken", (correct: string | null) => {
			if (correct == null) {
				this.hintsController.showHint(
					"Вы ошиблись. Попробуйте ещё раз... :("
				);
			} else {
				this.hintsController.showHint(
					`Правильное значение: "${correct}". ;)`
				);
			}
		});
	}
}
