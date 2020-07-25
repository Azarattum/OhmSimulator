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
			"Предел шкалы (Aшк)",
			"Цена деления прибора (C=Aшк/N)",
			"Чувствительность (S=1/C)",
			"Абсолютная погрешность (ΔA=γAшк/100)"
		];
	}

	public static get complexHeaders(): string[] {
		const headers = this.headers;
		headers[5] = headers[5].replace("Aшк", "A&#8344;");
		headers[7] = headers[7].replace("Aшк", "A&#8344;");
		headers.splice(5, 0, "Множитель (Мн)");
		headers.splice(6, 0, "Предел измерения (A&#8344;)");
		return headers;
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

	public static get complexData(): string[][][] {
		return [
			[
				[...this.subHeaders, ""],
				["", "", "", "", ""],
				[...this.subHeaders, ""],
				["", "", "", "", ""]
			],
			[
				["-", "", "", "", ""],
				["", "", "", "", ""],
				["-", "", "", "", ""],
				["", "", "", "", ""]
			]
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
