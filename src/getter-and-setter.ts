export {};
class MyNumber {
  private _owner: string;
  private _secretNum: number;

  constructor(name: string, secretNum: number) {
    this._owner = name;
    (this, (this._secretNum = secretNum));
  }
  get owner() {
    return this._owner;
  }

  set secretNum(secretNum: number) {
    this._secretNum = secretNum;
  }

  debugPrint() {
    return `secretNum ${this._secretNum}`;
  }
}

const card = new MyNumber('Taro', 1234);
console.log(card.debugPrint());
card.secretNum = 44444;
console.log(card.debugPrint());
