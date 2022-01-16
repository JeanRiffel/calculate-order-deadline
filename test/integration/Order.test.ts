import { Item } from "../../src/entities/Item";
import { Order } from "../../src/entities/Order";

let item_1 : Item;
let item_2 : Item;

beforeAll( ()=>{
    item_1 = new Item(1, 'smart watch ', 58.68);
    item_2 = new Item(2, 'smart tv ', 300.50);
} );


test('Creating order', ()=>{
    const order = new Order();
    order.addItem(item_1);
    order.addItem(item_2);    
    expect(order.getItems().length).toEqual(2);
});
