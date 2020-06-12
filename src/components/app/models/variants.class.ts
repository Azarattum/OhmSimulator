/**
 * Variants model data class
 */
export default class Variants {
	private static get precisions(): number[] {
		return [1, 1.5, 2];
	}

	private static get ampermeterSteps(): number[] {
		return [5, 10, 15, 20, 25];
	}

	private static get voltmeterSteps(): number[] {
		return [2, 3, 4, 5];
	}

	public static get(id: number): IVariant {
		return {
			ampermeterPrecision: this.precisions[id % 3],
			voltmeterPrecision: this.precisions[(id * 2) % 3],
			ampermeterStep: this.ampermeterSteps[id % 5],
			voltmeterStep: this.voltmeterSteps[id % 4],
			isSwapped: id % 2 == 0,
			compact: id
		};
	}
}

export interface IVariant {
	voltmeterStep: number;
	ampermeterStep: number;

	voltmeterPrecision: number;
	ampermeterPrecision: number;

	isSwapped: boolean;
	compact: number;
}
