TypeScript Datatypes -

1. number - 1, 5.3 , -10 All numbers no differentiations between floats and integers.

2. string - 'Hi' , "Hi" , `Hi` - All text values.

3. boolean - true or false. - Just these two , no truthy or falsy values.

Typescript only helps in during the development process i.e before deploying it.

JavaScript uses dynamic types resolved at runtime.

TypeScript uses static types resolved at compile time.

The core primitives types in typescript are all of lowercases.

Some of the core types present in typescript are as follows -
number , string , boolean, object , Array, Tuple , null , undefined , void , any.

Type Assignment and Type Inference -

Type inference means on assiging any value to the variable the typescript detects the datatype of that variable.

Thus if you leveraging the type inference concept then you can assign any type of value to the variable.

Types allows you to detect error early and avoid future runtime errors.

Object Types -

-> Any javascript object is of type object. ex : {age:30}

const person:{
name:string;
age:number;
}={
name:"Mayank",
age:25
};

Array types

-> Any javascript array is supported.

-> const hobbies:string[]=['a','b'];

-> To assign multiple type of values to the array.

-> const hobbies:any[]=[1,2,3,'m',true]; or const hobbies:(string | number)[]; i.e using union types.

Tuple types

-> Javascript does not have tuple. Tuple is an fixed length array.

-> When you want to declare an array of fixed length and fixed types then instead of using array we can use the tuple so that we can have more strictness.

-> const role:{
propertyName:[number,string];
}={
propertyName:[5,"Mayank"];
};

Working with Enums -

When we want to represent number which will remain constant in the form of human readable form then we can use Enum types.

enum{new,old} added by typescript automatically , enumerated global constant identifiers.

You may want to add the meanining full name to any constant number so that you have not to remember the number.

Always name your enum starting from capital letter and it is your first custom type.

So instead of creating constant we can have enum Role{ADIM, Rolds}

Any means any data type can assigned to an variable.

Any takes away all the advantage that typescript gives you it behaves as an vanilla javascript.

When you do not know the datatype of an variable and you want to assign the type as an fallback then you can use the any datatype.

literal types means being clear about the type of value hold by the variable.

literals types are used in conjuction with the union types where we are able to define the type of values the variable is going to accept.

We can create our own datatype using the type keyword.

type Combinable= number | string | boolean ;

const someVariable:Combinable;

Function return types and & void.

If we print an function which does not return anything then it returns undefined.

undefined is an type in typescript.

You must assign an void to the function which does not return anything.

We can also assign an function as an type.

const someRandomFunction : Function;

now we can assign any function to the someRandomFunction.

Function types are types that describes the functions.

So to be more precise we can assign the arrow function as an type.

const someRandomFunction: (a:number,b:number) => number;

someRandomFunction can be assigned to any function that takes two parameters of type number and returns an number.

Now any other function assigned to someRandomFunction will give compilation error.

Function types allows you to define the datatype of the function.

callback function can return something even if the return type is not defined or defined as void.

Function types define the paramaters and the return type of the function.

unknown type -

const x:unknown;

We can store any value in x without getting any type of error.

The type unknown cannot be assigned to any other datatype. Whereas any can have any type of value.

unknown is bit more restrictive as compared to any.

never type

The functions which contains the error or exception must be assigned the never datatype.

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

let & const -

variables defined with const keyword cannot be changed i.e re-assigned.

Any variable defined using the let and const keyword is having block level scope.

This is called spread operator const brr=[...arr];

Rest parameters are used for taking multiple parameters which are combined as an array to one array variable.

reduce() is the method which can be called using the array and it takes two parameters function and the initial value. It is amounted to one result value.

reduce((prevValue,currValue)=>prevValue+currValue,initalValue);

rest parameters are used in function as an parameter and spread operator are used with objects and arrays for adding and assigning values.

Array and Object destructuring -

While performing object destructuring you must extract with the same name as defined inside the object.

Though we can also give alias to all the property names.

Once alias is assigned then you canot access the extract variable with the orignal name.

Typescript compiles code from .ts to .js and also modern javascript to old javascript.

Classes with inheritance and interfaces -

What are classes and object oriented programming ?

-> Working with real life Entities in your code.

-> example fetching and listing the list of products from ProductsList fetched from server database.

-> Objects holds logic for rendering and fetching.

-> Classes are blueprints of object it holds the information about which data is going to be hold by object and which method is going to be hold by object.

-> Object are instances of classes.

-> Class based creation is alternative to using object literals.

-> Classes makes it easier to create multiple object with similar properties structure which only differ in terms of data.

-> We can declare the variable inside the class without using the let and const keyword.

-> You must declare the constructor() method inisde the class where you must initialize all the properties variable to some initial values.

-> The method are declared in the following mannes inside the class -

class RandomClass{

    printOutput(){

    }

}

to refer to the object property created using class inside the class always use this keyword it refes to the concrete instance of class that is created. Using this with dot notation we can access any property or method of the class.

this refers to the object which calls the method.

this inside of the class is always of type of that class.

private and public access modifier.

We declare the property as private so that it can only be accessed inside the class.

Instead of declaring the properties outside the constructor and then initializing iniside the constructor. We can use the access modifier in the parameter itself so that it creates the property automatically and assign these parameter as an property to the instace of class ie object.

To make any property only initialized once and then after that it cannot be changed then we can use the readonly just before the variable . It will prevent the variable from getting edited again.

readonly adds extra property to the variable property.

One class can inherit from only one class using the extends keyword.

The classs which extends or inherit from another class takes all the properties , methods and contructor of parent class.

However child class can also have separate constructor. Inside which we must call the super() constructor i.e super calls the conrtuctor of the base class.

You must call the super() constructor before accessing to the this keyword inside the child class contructor.

We can also override properties of base class.

protected variables are available in the same class and to all the sub-class which extends the parent class.

Getters and setters -

For the private filed to get the private outside of class we can use the get keyword.

get AnyNameOfYourChoice(){

}

objectName.AnyNameOfYourChoice; will give the or return the property.

Similary we can use set keyword for setting the values.

set mostRecentReport(value:string)
{
this.name=value;
}

objectName.mostRecentReport='latestReport';

To access the property directly using the class name we can declare them using the static keyword.

We cannot access the static variables inside the non-static methods.

We do not access the static properties using the this keyword instead we have to use the ClassName.staticPropertyName.

static properties and method - stataic properties and methods are not accessed using the instance of the class and is directly used on the class.

just like Math.pi , Math.max() , Math.min() , Math.random() , Math.pow()

Abstract classes -

When you want to force the developer to override a particular method from child class.

When you have the empty method on the base class and now you want to force the implementations of that method in all the child classes

So firstlty you have to declare the class like this -

abstract class A{

    abstract methodA( name : string ):void;

}

class B extends A{
methodA(name:string)
{

    }

}

You any class extends abstract class then the child class must give the definition to all the abstract methods.

abstract class can never be used for instantiation and only used for extending purpose. So that inherited class are foreced to provide the implementation of abstract method and override that method.

Singleton and private constructor -

There is an singleton pattern in OOP it ensures that every class will be having only one instances.

In Singleton pattern you cannot create multiple objects based on one class.

We can add private keyword ahead of the constructor to create the private constructor.

but now we cannot use the new keyword to create the instance of the class using the private constructor since the constructor is private and we cannot access that constructor outside of the class.

So we can use the static method named as getInstance , we will configure it in such a way that if the instance is already created it will return the old instance or existing instance and if the instance is not created then it will create and return the new instance of the class.

We will be declaring the private static instance : ClassName ;

Now we can use the instance property to check and assign the instance of the class.

Interface - interface describe the structure of an object we can use it to describe the structure of the object.

But when we have type keyword why do we need an interface. Well interface and custom type are not exactly same.

While using the type keywors we can also use the union type for properties wheras in interface we cannot use the union type.

interface is clearer than the type keyword.

We can also implement the interface using the class it is more like an contract that class can have.

An class can implement multiple interface at the same time.

If an class implements an interface the class is forced to include the structure of the interface defined inside the interface.

interfaces are mostly used to share functionalitites among different classes.

interfaces does not have any kind of implementation at all and whereas the abastract classes can be mixture of the implemented properties and methods and non-implemnented methods and properties.

With the help of interface we can force an certain structure to all the classses.

We cannot add the public and private modifier but we can add the readonly keyword inside the interface which makes sure that the property is only set once and after that it cannot be re-initialized.

One interface can also extends another interface.

One class cannot extends multiple classes at the same time whereas one interface can extends multiple interfaces at the same time.

Interfaces as Function Types -

interfaces can also be used to define the structure of the function.

Optional parameters and properties -

Sinced whichever class implements the interface must implement all the properties defined inside the interface so we can also set the optional properties and parameters so that evfery class implementing the interface is not forced to provide the implementations of those optional properties.

To make the property optional just add the ? at the last tof the propery name.

Typescript compiles the interface code as an class.

interfaces are pure typescript fetaure and when compiled they are converted into the classes and functions in javascript code.

interfaces can force an class and object to have a certain type of structure.

type have the union type functionality wheras interface does not.

Intersection Types -

intersection types allows us to combine other types.

Two types can be intersected using the & (ampersand).

intersections types are closely related to the interface inheritance.

typeguards helps us with union types to check the type of the variable using the typeof keyword.

the type guard typeof will only return the built in javascript type 'string' , 'object' , 'number' , 'boolean'.

If we print the custom type typeguard it will print the 'object'

type Employee={
name:string;
age:number;
}
const e1:Employee={
name:"Mayank",
age:25
};

console.log(typeof e1);

output -> object

if we want to check whether any property is inside an object or not using the in keyword ->

console.log("PropertyName" in e1);

There is one more type guard named as instanceof which tells whether the object is of any type of class or not.

console.log(objectName instanceof ClassName);

Discriminated Union is an typeguard and it is an pattern and makes the usage of union easier.

We cannot use instanceof when dealing with the interfaces as interface is not compiled to javascript and it will not be available at the runtime.

We can assign the type property to interface and based on the type checking we will be performing the operation at the runtime.

So this is the Discriminated union where we describe one common property in every interface so that based on that common property holding different value for different interfaces we will be performing different operations.

Type casting -

When we are manipulating the DOM using the typescript and we want to perform some operation and for that purpose first we need to extract the html element from the index.html using the DOM manipulation method document.getElementById('someIdAssignedToHtmlElement') document.querySelector('htmlElementName').

However while extracting the html element we must tell the typescript about the type of html element we are extracting since every html element is of type HTMLElement.

<input> element is of type <HTMLInputElement>.

Now there are two ways of type casting.

1. const inputElement= <HTMLInputElement> document.querySelector('input');

We cannot use the above way to type cast in react as we write jsx code.

2. const inputElement= document.querySelector('input') as HTMLInputElement;

We can use the as keyword to typecast and we can also use this in react too.

Whenever you add the ! mark at last of the expression it is used for telling the typescript that this expression will never return the null.

Inisde the interface if we want to declare properties where we know about the type of value property is going to hold but not about the number of prperty and name of the property then we can declare the property using the index type using square brackets.

We can declare the property with any name inside the square brackets with specifying the type of the property.

interface interfaceName{
[prop:string]:string;
}

So here we are saying that we don't know about the property name and property count all i know about there are properties of type string and holding the string values.

Whenever we have the index type inside the interface then all the property declare inside the interface must be of type string and not number.

Function Overloads - We can call the same function with different parameters i.e different signature.

function add(a:number,b:number):number
function add(a:string,b:string):string
{
return a+b;
}

So you will be defining the function () definition as many times you want to overload but the logic inside the function will be only written once.

Optional Chaning -

When you do not know about that there is certain property inside some object or not. When you are feetching the data from the server database.

So if we are not sure about the property of an object then we must add the ? after the object before . before accessing any property of the object.

const object = {
property1:value1,
prioperty2:value2,
}

We will be accessing the prooperty using the optional chaning like this -

object?.propery3

Nullish Coalescing - it is the scenario where an value might be null or undefined and we want to assign another default value if the first value is null.

const variable1 = variable2 ?? 'DEFAULT';

now if the variable2 is null or undefined then 'DEFAULT' will be assigned as an value.

Generics -

AN Generics types is the feature used for definging the type of varable at the runtime.

Promise - The promise object reperesents eventual completion or failure of asynchronous operation and its resulting value.

A promise the object representing the eventual completion or failure of the asynchronous operation.

Object.assign(target,source1,source2,source3); it takes two objects and returns the target object which is the combination of target and source object where if there exists same property inside the target and source object then the property from the source object is given higher property.

We can also restrict genereic types using constraints using the extends keyword. We can restrict the type of generic to some of the data type.

keyof is used for determining that whether an particular key exists inside the object or not. And also to tell typescript that an particular generic type passed as an parameter is an keyof another generic type.

U extends keyof T.

We can have gewneric classes and generic method as well.

Decorators -

Decorators are useful for meta programming.

Inside the tsconfig.json file add the follwoing property inside the object.

"experimentalDecorators":true it is used for enabling the es7 decorators.

Decorators are helpful for meta programming i.e when other person uses your code it is easy for him/her to analyze your code.

Decorators are basically an function you apply to something ex - class in a certain way.

We add the decorators i.e the function we created using the @FunctionOrDecoratorName just above the class with some arguments.

We pass the argument ex target:Function as an parameter to the decorator.

Decorators are executed when your class are defined. Just before the class.

JavaScript executes the decorator function just when it founds the class definition.

Beside creating the decorators following the above way we can also define the decorators factories which basically returns the decorator function and also allows us to configure it when we assign it as an decorator to something.

When we are using the decoraotor factories we have to create an function which is returning the function which itself is an decorator.

And when we are adding the or applying the decorator to the class we will be using the
@DecoratorName(somParameter) we can add the parenthesis to configure it.

You always must pass the decorator function argument as an function even if you are mentioning it as function someDecoratorFunction (\_:Function)

Angular also gives the decorators.

We can also have more than one decorators and apply it to an class or any where else.

If there are multiple decorators applied to the class the order of execution of decorators is the bottom up approach.

If there are mutiple decorators factories are applied to the same class then it will follow the top to bottom approach.

There are more places where we can add the decorators.

We can also the decorator to the property. If we are adding the decorator to the property then it recieves two arguments the first argument is target which could be constructor of any type and the second argument is the propertyName which could be string or Symbol.

We can also add decorators to accessors and parameters.

All the decorators are running independent of instantiation of object. It only runs when the class is defined. It does not run at the run time.

Decorators allows you to do work or setup work behind the scenes when the class is defined.

Decorators are the function which runs when the class is defined to setup work like add the meta data.

Decorators are used for adding extra functionality to the class , properties , parameters , accessors , methods.

Advantage of decorators -

1. Returning and changing a class in class Decorator -

We can return the constructor function which will replace the orignal constructor function inside the decorator function.

We also return something on the decorators used or applied on accessors or methods.

Decorators used on the parameters or properties can also return something but generally are ignored by the typescript.

However we can return new PropertyDescriptor when used with the accessors like set or get and on methods.

Whatever you pass inside the bind() method this will refer to that object.

The target passed as an parameter in the decorator is either the prototype for the objects or the constructor for the static properties or the reference to static methods.

methods are the property of an object which holds the function as an value.

We can also add validation with the help of decorators.

We use <template> tag in html to contain some html code inside it and it will not be visible to the user by default until and unless we make it visible using the javascript or typescript.

To get the content or node from the index.html we will use the document.importNode(pointerToHtmlElement.content (ite gives the refernce to the content of html element) , true for deep cloning and false for not deep cloning).

We can use decorator to automatically bind to the object we want.