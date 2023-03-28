export interface Country {
	name: string;
	alpha3Code: string;
	capital?: string;
	altSpellings?: string[];
	subregion: string;
	region: string;
	population: number;
	demonym: string;
	borders?: string[];
	nativeName: string;
	currencies?: Currency[];
	regionalBlocs?: RegionalBloc[];
	independent: boolean;
	flag: string;
}

export interface FilteredCountry
	extends Pick<
		Country,
		'name' | 'alpha3Code' | 'capital' | 'region' | 'subregion' | 'independent' | 'population' | 'flag'
	> {}

// name,alpha3Code,capital,altSpellings,subregion,region,population,demonym,borders,nativeName,flag,currencies,regionalBlocs,independent

export interface Currency {
	code: string;
	name: string;
	symbol: string;
}

export interface Language {
	iso639_1?: string;
	iso639_2: string;
	name: string;
	nativeName?: string;
}

export interface RegionalBloc {
	acronym: Acronym;
	name: string;
}

export enum Acronym {
	Al = 'AL',
	Asean = 'ASEAN',
	Au = 'AU',
	Cais = 'CAIS',
	Caricom = 'CARICOM',
	Cefta = 'CEFTA',
	Eeu = 'EEU',
	Efta = 'EFTA',
	Eu = 'EU',
	Nafta = 'NAFTA',
	Pa = 'PA',
	Saarc = 'SAARC',
	Usan = 'USAN',
}
