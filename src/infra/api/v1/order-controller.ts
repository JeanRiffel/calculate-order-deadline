import { runInThisContext } from "vm";
import { OrderItems } from "../../../application/dto/OrderItems";
import { Item } from "../../../entities/Item";
import { Order } from "../../../entities/Order";

export class OrderController {
    private _order : Order;    

    constructor( private orderItems  : OrderItems  ){
        this._order = new Order();
        this._order.addItem(new Item( orderItems.id, orderItems.description, orderItems.price ));        
    }

}
