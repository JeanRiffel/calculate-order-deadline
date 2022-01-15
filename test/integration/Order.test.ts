import { Item } from "../../src/entities/Item";
import { Order } from "../../src/entities/Order";

test('Creating order', ()=>{
    const item_1 = new Item(1, 'smart watch ', 58.68);
    const item_2 = new Item(2, 'smart tv ', 300.50);
    const order = new Order();
    order.addItem(item_1);
    order.addItem(item_2);    
    expect(order.getItems().length).toEqual(2);
});