import { Item } from "../../src/entities/Item";

test("Create Item" ,  ()=>{    
    const item = new Item(1, "smart watch",  50.48);
    expect(item.id).toEqual(1);
});