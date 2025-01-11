export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  get id() {
    return this._id;
  }
  set id(val: string) {
    this.id = val;
  }
  get item() {
    return this._item;
  }
  set item(val: string) {
    this.item = val;
  }
  get checked() {
    return this._checked;
  }
  set checked(val: boolean) {
    this.checked = val;
  }
}
