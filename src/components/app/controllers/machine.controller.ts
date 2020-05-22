import Controller from "../../common/controller.abstract";

/**
 * Machine controller
 */
export default class Machine extends Controller<"">() {
	public initialize(): void {
		this.expose("activate");
	}

	/**
	 * Activates the machine and moves to the next stage
	 */
	public activate(): void {
		const img = this.container.querySelector("img");
		const width = img?.clientWidth;
		if (img) {
			img.style.width = width + "px";
			setTimeout(() => {
				img.style.width = "100vw";
			}, 0);
		}

		const inactive = this.container.querySelector(".inactive");
		inactive?.classList.remove("inactive");
	}
}
