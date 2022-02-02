import Router from 'koa-router';
import { OrderItems } from '../../../application/dto/OrderItems';
import { OrderController } from './order-controller';
import Redis from 'ioredis';
import JSONCache from 'redis-json';

const mainRoute = new Router();
const redis = new Redis();
const jsonCache = new JSONCache(redis);

mainRoute.post('/order', async (ctx)=>{
    
    const description : string = ctx.request.body.description;
    const price : number = ctx.request.body.price;
    const orderId = Math.round(Math.random() * 100);

    //const result = await jsonCache.get(orderId );
    await jsonCache.set(orderId.toString() ,  ctx.request.body);
    
    const orderItems = new OrderItems( orderId, description, price  );
    //Test    
    const orderController = new OrderController(orderItems);
    ctx.response.body = "Order number is ".concat( orderId.toString());
} );

export default  mainRoute;


