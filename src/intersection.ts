export {};
type Pitcher1 = {
  speed: number;
};

type Batter1 = {
  average: number;
};

const sasaki: Pitcher1 = {
  speed: 154,
};

const ochiai: Batter1 = {
  average: 1.3,
};

type TwoWay = Pitcher1 & Batter1;

const Ohtani: TwoWay = {
  speed: 163,
  average: 0.4,
};
