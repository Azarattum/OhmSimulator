/**
 * Table layout model data class
 */
export default class Layout {
	public static get headers(): string[] {
		return [
			"Тип",
			"Система измерительного прибора",
			"Класс точности (γ)",
			"Число делений (N)",
			"Предел шкалы (A&#8344;)",
			"Цена деления прибора (C=A/N)",
			"Чувствительность (S=1/C)",
			"Абсолютная погрешность (ΔA=γA&#8344;/100)"
		];
	}

	public static get subHeaders(): string[] {
		return ["Единица измерения", "-", "-", "дел."];
	}

	public static get data(): string[][] {
		return [
			this.subHeaders,
			["", "", "", "", "", "", ""],
			this.subHeaders,
			["", "", "", "", "", "", ""]
		];
	}

	public static get units(): string[] {
		return ["В", "мА"];
	}

	public static get costUnits(): string[] {
		return this.units.map(x => x + "/дел");
	}

	public static get precisionUnits(): string[] {
		return this.units.map(x => "дел/" + x);
	}

	public static get meters(): string[] {
		return ["Вольтметр", "Миллиамперметр"];
	}

	public static get types(): string[] {
		return [
			"Магнитоэлектрическая",
			"Электромагнитная",
			"Электродинамическая",
			"Ферродинамическая",
			"Индукционная",
			"Электростатическая",
			"Логометрическая",
			"Вибрационная",
			"Тепловая"
		];
	}
}
