### Calculate Order Deadline

The goal of this project is calculate order deadline, based on postal code as origin and a postal code as destination.

List of Packages:

   - typescript 
   - koa 
   - @koa/router
   - @types/node 
   - @types/node 
   - @types/typescript 
   - jest 
   - @types/jest

The project is using Node v14.18.3, you can use nvm to set the version.

Install all packages:

   ``` 
     yarn install 
   ```

Type the following command to generate the tsconfing.json
   ``` 
    tsc --init 
   ```
After the command had being executed let's configure the file tsconfing.json in this way.
   ```
   {
        "compilerOptions": {
        "target": "es6",                  
        "module": "commonjs",             
        "outDir": "./dist",               
        "esModuleInterop": true,          
        "forceConsistentCasingInFileNames": true, 
        "strict": true,                           
        "skipLibCheck": true                      
        }
    }
``` 

Docker 

   Building
   ```
   docker build . -t calculate-order-deadline
   ```
   
   Running
   ```
   docker run -d -p 3001:3001 --name calculate-order-deadline calculate-order-deadline 
   ```



