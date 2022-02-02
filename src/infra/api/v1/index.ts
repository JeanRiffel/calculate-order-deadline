import server from './server';
const port = process.env.PORT;


///running the server
server.listen( port ,  
        ()=>{console.log(`Server is running on port ${port} ` )}) ;
