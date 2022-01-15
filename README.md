Calculate Order Deadline

The goal of this project is calculate order deadline, based on postal code as origin and a postal code as destination.

List of Packages

   - typescript 
   - koa 
   - @koa/router
   - @types/node 
   - @types/node 
   - @types/typescript 
   - jest 
   - @types/jest

The project is using Node v14.18.3, you can use nvm to set the version.

Install all packages

   - yarn install

Type the following command to generate  the  tsconfing.json
    
    - tsc --init 
       
    After the command had being executed let's configure the file tsconfing.json in this way.

    {
        "compilerOptions": {
        "target": "es6",                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
        "module": "commonjs",             /* Specify what module code is generated. */
        "outDir": "./dist",               /* Specify an output folder for all emitted files. */
        "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
        "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
        "strict": true,                                      /* Enable all strict type-checking options. */
        "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
        }
    }
