(function () {
  class Iterator {
    public items: any[] = [];
    private _index: number = 0;

    constructor(items: any[]) {
      this.items = items;
    }

    public reset(): void {
      this._index = 0;
    }

    public next(): void {
      this._index++;
    }

    public isEnd(): boolean {
      return this.items.length === this._index;
    }

    public getCurrentItem(): any {
      return this.items[this._index];
    }

    public getCurrentIndex(): number {
      return this._index;
    }
  }

  const items = [123, 333, "sddw2", "R", "abc", 11, { a: 12, b: 4 }];
  const iterator = new Iterator(items);

  for (iterator.getCurrentIndex(); !iterator.isEnd(); iterator.next()) {
    console.log(iterator.getCurrentItem());
  }
})();
