import  Koa  from "koa";
import mainRoute from "./main-route";
import bodyParser  from 'koa-bodyparser';

const server = new  Koa();

server
    .use(bodyParser() )
    .use(mainRoute.routes() )
    .use(mainRoute.allowedMethods());    

export default server;