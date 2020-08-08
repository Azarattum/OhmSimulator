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
import Table2Ctrl from "./controllers/table2.controller";

/**
 * Event handler for application components
 */
export default class EventsHandler implements IEventsHandler {
	private devicesController: Devices;
	private machineController: Machine;
	private variantController: Variant;
	private powerController: Power;
	private exampleController: TableCtrl;
	private tableController: TableCtrl;
	private table2Controller: Table2Ctrl;
	private tabsController: Tabs;
	private hintsController: Hints;

	private deviceViewes: Device[];

	/**
	 * Creates new envet handler for components
	 * @param components Components to handle interactions with
	 */
	public constructor(components: { [name: string]: IComponent[] }) {
		//Defining all components
		this.powerController = components["Power"][0] as Power;
		this.devicesController = components["Devices"][0] as Devices;
		this.tabsController = components["Tabs"][0] as Tabs;
		this.variantController = components["Variant"][0] as Variant;
		this.hintsController = components["Hints"][0] as Hints;
		this.table2Controller = components["Table2Ctrl"][0] as Table2Ctrl;

		this.machineController = components["Machine"].find(
			x => (x.constructor as any).type == "Controllers"
		) as Machine;
		this.tableController = components["TableCtrl"].find(
			x => !(x as TableCtrl).isExample
		) as TableCtrl;
		this.exampleController = components["TableCtrl"].find(
			x => (x as TableCtrl).isExample
		) as TableCtrl;

		this.deviceViewes = components["Device"] as Device[];
	}

	/**
	 * Registers all events for components
	 */
	public async registerEvents(): Promise<void> {
		//Tab changed event
		this.tabsController.on("tabchanged", (tab: string) => {
			location.hash = "";
			if ((this.tabsController.visits.get(tab) || 0) > 1) {
				return;
			}

			if (tab == "greeting") {
				setTimeout(async () => {
					this.hintsController.showHint(Messages.greet);
				}, 100);
			} else if (tab == "example") {
				//Set example
				this.exampleController.setVariant(Variants.get(0));
				setTimeout(async () => {
					this.hintsController.showHint(Messages.example);
				}, 100);
			} else if (tab == "table") {
				setTimeout(async () => {
					this.hintsController.showHint(Messages.table);
				}, 100);
			} else if (tab == "complex") {
				if (this.tableController.variant) {
					this.table2Controller.setVariant(
						this.tableController.variant
					);
				}

				setTimeout(async () => {
					this.hintsController.showHint(Messages.complex);
				}, 100);
			} else if (tab == "machine") {
				setTimeout(async () => {
					this.hintsController.showHint(Messages.machine);
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

		this.machineController.on("powered", () => {
			this.hintsController.showHint(Messages.powered, true);
		});

		this.machineController.on("ready", () => {
			this.hintsController.showHint(Messages.ready);
		});

		this.machineController.on("activated", () => {
			this.hintsController.showHint(Messages.activated);
		});

		//Register variant update
		this.variantController.on("variantChanged", (id: number) => {
			const variant = Variants.get(id);

			const elements = document.querySelectorAll(
				"[view='table'][tab='table'] .elements," +
					"[view='table'][tab='complex'] .elements"
			);
			elements.forEach(x =>
				x.classList.toggle("swapped", variant.isSwapped)
			);

			//Rerender views
			this.deviceViewes.forEach(device => {
				const data = device.container?.dataset;
				if (!data) return;
				if (data.example === "true") return;

				if (data.name == "voltmeter") {
					data.step = variant.voltmeterStep.toString();
					data.precision = variant.voltmeterPrecision.toFixed(1);
					data.compact = ((variant.compact + 2) % 3 == 0).toString();
					if (data.fixed != null) {
						data.fixed = variant.voltmeterMultiplierId.toString();
					}
				} else {
					data.step = variant.ampermeterStep.toString();
					data.precision = variant.ampermeterPrecision.toFixed(1);
					data.compact = (variant.compact % 5 == 0).toString();
					if (data.fixed != null) {
						data.fixed = variant.ampermeterMultiplierId.toString();
					}
				}
				device.render();
			});

			//Update resistance
			this.devicesController.setResistance(variant.resistance);

			//Update table validator
			if (this.tabsController.current == "table") {
				this.tableController.setVariant(variant);
			} else if (this.tabsController.current == "complex") {
				this.table2Controller.setVariant(variant);
			}
		});

		const mistaken = (correct: string | null): void => {
			if (correct == null) {
				this.hintsController.showHint(Messages.mistake);
			} else {
				if (Number.isFinite(+correct)) {
					correct = correct.toString().replace(".", ",");
				}
				this.hintsController.showHint(
					Utils.format(Messages.correction, correct)
				);
			}
		};

		const punished = (): void => {
			this.hintsController.showHint(Messages.refresh, true);
			this.variantController.refreshVariant();
		};

		const done = (result: Result): void => {
			let message = Messages.done;
			if (result == Result.Exellent) {
				message = Utils.format(message, Messages.exellent);
			} else if (result == Result.Good) {
				message = Utils.format(message, Messages.good);
			} else if (result == Result.OK) {
				message = Utils.format(message, Messages.ok);
			}

			this.hintsController.showHint(message);
		};

		this.tableController.on("mistaken", mistaken);
		this.tableController.on("punished", punished);
		this.tableController.on("done", done);

		this.table2Controller.on("mistaken", mistaken);
		this.table2Controller.on("punished", punished);
		this.table2Controller.on("done", done);

		//Set defaul tab
		let tab = "greeting";
		switch (location.hash) {
			case "#help":
				tab = "help";
				break;
			case "#help2":
				tab = "help2";
				break;
			case "#help3":
				tab = "help3";
				break;
		}
		this.tabsController.change(tab);
	}
}
