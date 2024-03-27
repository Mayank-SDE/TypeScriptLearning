To compile the typescript file while enabling the watch mode we can type the following command -

-> tsc typeScriptFileName.ts -w

Now in watch mode you have no need to re-compile the typescript file again and again and if you make changes of any type it will automatically gets re-compiled.

means the .js file generated from the .ts file will automatically updated from the app.ts file in watch mode since we have compiled the .ts file using th command

-> tsc typeScriptFileName.ts -w

-> tsc --init
By using the above command it creates the tsconfig.json file. Now all the project is managed by the typescript.

But what if we have more than one file now is the watch mode is enough or not.

tsc --init will create the tsconfig.json file and it will manage all the files stored inside the same folder.

Now for compiling the file we have no need to do it separately like tsc filename1.ts and tsc filename2.ts instead all we need to do is just type tsc and it will compile all the files present inside the same folder with .ts extension and convert it into the .js file.

Now on typing the -> tsc -w all the files will come under the watch mode and on changing any one file it will re-compile that particulat file.

tsconfig.json file tells typescript how it should compile the typescript file.

We can add the exclude property in the tsconfig.json file object where it takes an array where we mention the file paths which must not gets compiled on running the tsc command.

We can also use the regular expression asterstick \* to tell the typescript that any file starting with or ending with the following wxtension must not gets compiled.

exclude:["*.dev.ts","**/*.dev.ts"]

We want to exclude the node_modules file so exclude:["node_modules"] node_modules is the folder/file which holds all the dependencies and the dependencies of dependencies mentioned inside the package.json and package-lock.json file.

Therefore these are third party libraries which we do not want to touch. However node_modules is excluded by default.

Just like exclude we also have include property to set inside the tsconfig.json file However you must remember that if we are setting the include property inside the tsconfig.json file then only the files ts which are mentioned inside the tsconfig.json include property will get compiled. And if any file is not mentioned inside the include property then it will not get compiled.

We also have the file option that is similar to include where there are only few files you want to compile and not used mostly.

Setting an compilation target property is used for telling the typescript for which target javascript version you want your btypescript code to get coimpiled.

All the typescript code are compiled to es5 javascript version by default.

However the modern javascript version you will select the more concise code you will get.

Whenever we add the ! mark behind any kind of expression it means in typescript that the expression value is never going to be null and its always evaluated to some value. As the typescript compiler is not able to determine the value of the expression.

All the properties which are not set inside the tsconfig.json file then some of the default values are set to those properties.

The question is how typescript knows about the dom manipulation document.querySelector() , button.addEventListener() etc it takes the help of the lib property inside the tsconfig.json file.

AS the target is es6 by default which have the browser api's

To unlock all the dom api's in typescript we can set the lib:[ "dom" ]

To make the es6 globally available options we must add the "es6" to the lib property.

lib : [ "dom" , "es6" , "dom.iterable" , "scripthost" ]. So these are the default values you get for the lib:[] property inside the tsconfig.json file generated using the commmand tsc --init.

allowJs allows you to add the javascript file in the copilation. javascript file will be compiled by the typescript.

checkJs will not compile the javascript file but still typescript will check for the potential errors.

allowJs , checkJs takes true or false.

allowJs allows the typescriot to compile the javascript files.

checkJs allws to check for the errors in the javascript files.

sourceMap helps us with debugging and development it takes true or false as an value.

if we set the sourceMap to true then when on going to the source tab section earlier only .js file were generated but now .ts file are also generated over there with the help of .map.js file generated using the tsc compiler which acts as an bridge between .js and .ts file.

Now we can directly debug .ts file instead of .js file.

rootDir and outDir

outDir takes the path of the folder where the generated javascript file will be stored.

outDir:"./dist" Now the specified folder will follow the same folder structure as the typscript folder structure.

rootDir:"./src" it is used for telling the typescript about the path inside which all the input typescript files are stored and the files stored inside only in this path will gets compiled.

if the removeComments:"true" is set to true then the js files which are generated from the tyoescript will remove the comments mentioned inside the typescript file.

noEmit:true if the noEmit is set to true then typescript only compiles the .ts file but not generate the js file.

"noEmitOnError":true if it is set to true then if the .ts file have some errors then .js file will not be generated and if it is set to false then even if the .ts file is having the error still the .js file will be generated.

either we can set strict:true or

1. noImplicitAny:true used for checking whether the type of parameter is defined or not.

2. strictNullChecks: true used for checking whether value can be null or not. To avoid this we used to add the ! mark behind the expression.

If we do not want to add the ! mark behind the expression we can also put the expression inside the if() statement with the main variable defined inside the if(button) statement so that even if the button element or any might be null element can be null then the expression will not executed.

because the if statement gives the sureity of not using that null value.

3. strictFunctionTyepes:true

4. strictBindCallApply:true It checks basically for the parameters you define inside the bind() method.

To pre-configure the function parameter without calling that function we will be using the bind method so thateven if we pass the argument to the function using bind mwthod it will ot get called immediately.

5. alwaysStrict:true It controls the javascript files which are generated uses strict mode or not.

TypeScript and Modern JAvascript Syntax -
