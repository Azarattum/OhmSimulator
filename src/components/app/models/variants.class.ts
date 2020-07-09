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
		const variant = {
			ampermeterPrecision: this.precisions[id % 3],
			voltmeterPrecision: this.precisions[(id * 2) % 3],
			ampermeterStep: this.ampermeterSteps[id % 5],
			voltmeterStep: this.voltmeterSteps[id % 4],
			ampermeterMultiplierId: id % 4,
			voltmeterMultiplierId: (id * 3) % 4,
			isSwapped: id % 2 == 0,
			compact: id
		} as IVariant;

		const voltmeterRanges = [0.5, 1, 2, 3];
		const ampermeterRanges = [1, 2, 5, 20];
		variant.ampermeterMultiplier =
			ampermeterRanges[variant.ampermeterMultiplierId];
		variant.voltmeterMultiplier =
			voltmeterRanges[variant.voltmeterMultiplierId];

		return variant;
	}
}

export interface IVariant {
	voltmeterStep: number;
	ampermeterStep: number;

	voltmeterPrecision: number;
	ampermeterPrecision: number;

	ampermeterMultiplierId: number;
	ampermeterMultiplier: number;
	voltmeterMultiplierId: number;
	voltmeterMultiplier: number;

	isSwapped: boolean;
	compact: number;
}
