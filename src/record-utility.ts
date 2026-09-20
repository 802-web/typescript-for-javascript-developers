export {};

type Prefectures = 'Tokyo' | 'Osaka' | 'Hokkaido' | 'aichi';

type Covid19 = {
	kanji_name: string;
	confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19> = {
	Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
	Osaka: { kanji_name: '大阪', confirmed_cases: 200 },
	Hokkaido: { kanji_name: '北海道', confirmed_cases: 10 },
	aichi: { kanji_name: '北海道', confirmed_cases: 40 },
};
