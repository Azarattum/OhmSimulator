import Controller, { element } from "../../common/controller.abstract";
import Chart from "chart.js";

/**
 * Charter controller
 */
export default class Charter extends Controller<"pointAttempt">() {
	@element("table")
	private table: HTMLElement | null = null;
	@element(".bar")
	private bar: HTMLElement | null = null;
	@element(".graph")
	private graph: HTMLElement | null = null;
	@element(".chart")
	private chart: HTMLElement | null = null;

	private points: { x: number; y: number }[] = [];

	private voltage: number = 0;
	private amperage: number = 0;

	public initialize(): void {
		this.bind();
		this.expose("add");
		this.expose("showChart");
		this.expose("hideChart");
	}

	public showChart(): void {
		if (!this.chart) return;
		const canvas = this.chart.querySelector("canvas") as HTMLCanvasElement;
		const context = canvas.getContext("2d");
		if (!context) return;

		new Chart(context, {
			type: "line",
			data: {
				datasets: [
					{
						data: this.points,
						lineTension: 0,
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						borderColor: "rgba(0, 0, 0, 0.6)",
						fill: false
					}
				]
			},
			options: {
				legend: { display: false },
				scales: {
					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: "I (мА)"
							}
						}
					],
					xAxes: [
						{
							type: "linear",
							scaleLabel: {
								display: true,
								labelString: "U (В)"
							}
						}
					]
				}
			}
		});

		this.chart.classList.add("active");
	}

	public hideChart(): void {
		this.chart?.classList.remove("active");
	}

	public add(): void {
		const x = +this.data.voltage.replace(",", ".");
		const y = +this.data.amperage.replace(",", ".");
		if (
			!Number.isFinite(x) ||
			!Number.isFinite(y) ||
			!this.table ||
			!this.graph ||
			x < 0 ||
			y < 0
		) {
			this.emit("pointAttempt", -1, -1);
			return;
		}
		if (this.points.find(p => p.x == x || p.y == y)) {
			this.emit("pointAttempt", -2, -2);
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
		this.points.sort((a, b) => a.x - b.x);

		this.data.points = this.points;
		this.emit("pointAttempt", x, y);
	}

	public setValues(voltage: number, amperage: number): void {
		this.voltage = voltage;
		this.amperage = amperage;
	}

	public activate(): void {
		if (this.bar) this.bar.style.transform = "none";
	}
}
