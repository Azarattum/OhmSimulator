import Controller from "../../common/controller.abstract";

/**
 * Variant controller
 */
export default class Variant extends Controller<"variantChanged">() {
	public initialize(): void {
		//Set default variant
		this.setVariant(0);

		this.expose("setVariant");
	}

	public setVariant(id: number): void {
		this.emit("variantChanged", id);
	}
}
