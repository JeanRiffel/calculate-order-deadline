import Router from 'koa-router';
import { OrderItems } from '../../../application/dto/OrderItems';
import { OrderController } from './order-controller';

const mainRoute = new Router();

mainRoute.post('/order', (ctx)=>{

    const id : number = ctx.request.body.id;
    const description : string = ctx.request.body.description;
    const price : number = ctx.request.body.price;

    const orderItems = new OrderItems( id, description, price  );

    const orderController = new OrderController(orderItems);
    ctx.response.body = "executed";

} );


export default  mainRoute;


