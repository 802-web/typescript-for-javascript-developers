export {};

type DetailedProfile = {
	name: string;
	height: number;
	weight: number;
};

type SImpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

type OmitProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;

type SmallProfile = MyOmit;
