import Controller from "../../common/controller.abstract";

/**
 * Variant controller
 */
export default class Variant extends Controller<"variantChanged">() {
	public id: number = 0;

	public initialize(): void {
		this.expose("setVariant");
	}

	public setVariant(id: number): void {
		this.id = id;
		this.emit("variantChanged", id);
	}

	public refreshVariant(): void {
		const id = (Math.round(Math.random() * 100) % 30) + 31;
		this.setVariant(id);
	}
}
