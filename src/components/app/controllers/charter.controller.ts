import Controller, { element } from "../../common/controller.abstract";

/**
 * Charter controller
 */
export default class Charter extends Controller<"pointAttempt">() {
	@element("table")
	private table: HTMLElement | null = null;
	@element(".graph")
	private graph: HTMLElement | null = null;

	private points: { x: number; y: number }[] = [];

	private voltage: number = 0;
	private amperage: number = 0;

	public initialize(): void {
		this.bind();
		this.expose("add");
	}

	public add(): void {
		const x = +this.data.voltage;
		const y = +this.data.amperage;
		if (
			!Number.isFinite(x) ||
			!Number.isFinite(y) ||
			!this.table ||
			!this.graph ||
			x < 0 ||
			y < 0 ||
			this.points.find(p => p.x == x && p.y == y)
		) {
			return;
		}

		const errorX = (Math.max(x, this.voltage) / 100) * 5;
		const errorY = (Math.max(y, this.amperage) / 100) * 5;
		if (
			Math.abs(x - this.voltage) > errorX ||
			Math.abs(y - this.amperage) > errorY
		) {
			this.emit("pointAttempt", null, null);
			return;
		}

		this.table.style.display = "inline-table";
		this.graph.style.display = "block";
		this.points.push({ x, y });

		this.data.points = this.points;
		this.emit("pointAttempt", x, y);
	}

	public setValues(voltage: number, amperage: number): void {
		this.voltage = voltage;
		this.amperage = amperage;
	}

	public activate(): void {
		this.container.style.transform = "none";
	}
}
