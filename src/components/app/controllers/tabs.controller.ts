import Controller from "../../common/controller.abstract";

/**
 * Service for controlling application views as tabs
 */
export default class Tabs extends Controller<"tabchanged">() {
	private tabs: IView[] = [];
	public visits: Map<string, number> = new Map();
	public current: string = "";

	/**
	 * Initializes tabs service
	 * @param tabs Tabs views to control
	 */
	public initialize(tabs: IView[]): void {
		this.tabs = tabs;

		this.expose("change");
	}

	/**
	 * Changes current opened tab
	 * @param tabName The open of tab to open
	 */
	public change(tabName: string): void {
		let name;
		//View tabs
		if (this.tabs && this.tabs.length > 0) {
			const selected = this.tabs.find(
				tab => tab.name.toLowerCase() == tabName.toLowerCase()
			);
			if (!selected) {
				throw new Error(`Tab ${tabName} does not exist!`);
			}

			name = selected.name;
			this.tabs.forEach(tab => tab.toggle(false));
			selected.toggle(true);
		}
		//Element tabs
		else {
			const selected = this.container.querySelector(
				`[tab="${tabName.toLowerCase()}"]`
			);
			if (!selected) {
				throw new Error(`Tab ${tabName} does not exist!`);
			}

			this.container.querySelectorAll("[tab]").forEach(x => {
				if (!(x as any).display) {
					(x as any).display = getComputedStyle(x).display;
				}
				(x as HTMLElement).style.display = "none";
			});
			(selected as HTMLElement).style.display =
				(selected as any).display || "block";
			name = selected.getAttribute("tab");
		}

		if (!name) return;
		const visits = this.visits.get(name) || 0;
		this.visits.set(name, visits + 1);
		this.current = name;
		this.emit("tabchanged", name);
	}
}

/**
 * Togglable view interface
 */
interface IView {
	name: string;
	toggle(value?: boolean): void;
}
