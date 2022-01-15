import { Item } from "./Item";

export class Order{

    private _listItems : Item[] = [];

    addItem( item : Item ) : void{
        this._listItems.push(item);
    }

    getItems() : Item[]{
        return this._listItems;
    }
}