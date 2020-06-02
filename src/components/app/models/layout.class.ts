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
			"Предел шкалы (A)",
			"Цена деления прибора (C)",
			"Чувствительность (S)",
			"Абсолютная погрешность (Δ)"
		];
	}

	public static get subHeaders(): string[] {
		return [
			"Формула,\nЕдиница измерения",
			"",
			"",
			"",
			"В\nмА",
			"C=A/N\nВ/дел\nмА/дел",
			"S=1/C\nдел/В\nдел/мА",
			"Δ=γA/100\nВ\nмА"
		];
	}

	public static get data(): string[][] {
		return [
			this.subHeaders,
			["", "", "", "", "", "", ""],
			this.subHeaders,
			["", "", "", "", "", "", ""]
		];
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
