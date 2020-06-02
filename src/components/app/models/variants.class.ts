/**
 * Variants model data class
 */
export default class Variants {
	public static get(id: number): IVariant {
		///TODO Add custom variants
		return {
			ampermeterPrecision: 2,
			voltmeterPrecision: 1.5,
			ampermeterStep: 20,
			voltmeterStep: 2,
			isSwapped: false
		};
	}
}

export interface IVariant {
	voltmeterStep: number;
	ampermeterStep: number;

	voltmeterPrecision: number;
	ampermeterPrecision: number;

	isSwapped: boolean;
}
