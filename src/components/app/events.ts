import { IComponent, IEventsHandler } from "../common/manager.class";
import Devices from "./controllers/devices.controller";
import Machine from "./controllers/machine.controller";
import Variant from "./controllers/variant.controller";
import Power from "./controllers/power.controller";
import TableCtrl, { Result } from "./controllers/table.controller";
import Tabs from "./controllers/tabs.controller";
import Hints from "./controllers/hints.controller";
import Device from "./views/device/device.view";
import Messages from "./models/messages.class";
import Variants from "./models/variants.class";
import Utils from "../common/utils.class";

/**
 * Event handler for application components
 */
export default class EventsHandler implements IEventsHandler {
	private devicesController: Devices;
	private machineController: Machine;
	private variantController: Variant;
	private powerController: Power;
	private tableController: TableCtrl;
	private tabsController: Tabs;
	private hintsController: Hints;

	private deviceViewes: Device[];

	/**
	 * Creates new envet handler for components
	 * @param components Components to handle interactions with
	 */
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	public constructor(components: { [name: string]: IComponent[] }) {
		//Defining all components
		this.powerController = components["Power"][0] as Power;
		this.devicesController = components["Devices"][0] as Devices;
		this.tabsController = components["Tabs"][0] as Tabs;
		this.variantController = components["Variant"][0] as Variant;
		this.hintsController = components["Hints"][0] as Hints;

		this.machineController = components["Machine"].find(
			x => (x.constructor as any).type == "Controllers"
		) as Machine;
		this.tableController = components["TableCtrl"][0] as TableCtrl;

		this.deviceViewes = components["Device"] as Device[];
	}

	/**
	 * Registers all events for components
	 */
	public async registerEvents(): Promise<void> {
		///Register your events here
		//Tab changed event
		this.tabsController.on("tabchanged", (tab: string) => {
			if (tab == "greeting") {
				setTimeout(async () => {
					this.hintsController.showHint(Messages.greet);
				}, 100);
			} else if (tab == "table") {
				//Set default variant
				this.variantController.setVariant(0);
				setTimeout(async () => {
					this.hintsController.showHint(Messages.table);
				}, 100);
			}
		});

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
			this.deviceViewes.forEach(device => {
				const data = device.container?.dataset;
				if (!data) return;
				if (data.name == "voltmeter") {
					data.step = variant.voltmeterStep.toString();
					data.precision = variant.voltmeterPrecision.toFixed(1);
					data.compact = ((variant.compact + 2) % 3 == 0).toString();
				} else {
					data.step = variant.ampermeterStep.toString();
					data.precision = variant.ampermeterPrecision.toFixed(1);
					data.compact = (variant.compact % 5 == 0).toString();
				}
				device.render();
			});

			//Update table validator
			this.tableController.setVariant(variant);
		});

		this.tableController.on("mistaken", (correct: string | null) => {
			if (correct == null) {
				this.hintsController.showHint(Messages.mistake);
			} else {
				this.hintsController.showHint(
					Utils.format(Messages.correction, correct)
				);
			}
		});

		this.tableController.on("punished", () => {
			this.hintsController.showHint(Messages.refresh, true);
			this.variantController.refreshVariant();
		});

		this.tableController.on("done", (result: Result) => {
			let message = Messages.done;
			if (result == Result.Exellent) {
				message = Utils.format(message, Messages.exellent);
			} else if (result == Result.Good) {
				message = Utils.format(message, Messages.good);
			} else if (result == Result.OK) {
				message = Utils.format(message, Messages.ok);
			}

			this.hintsController.showHint(message);
		});

		//Set defaul tab
		this.tabsController.change("greeting");
	}
}
