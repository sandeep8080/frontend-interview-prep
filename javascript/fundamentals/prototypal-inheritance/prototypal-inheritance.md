# PROTOTYPAL INHERITANCE IN JAVASCRIPT

To understand Prototype we need to first understand what is prototypal inheritance & how it works.

- JavaScript implements inheritance by using **Objects**.
- Whenever we create any objects, arrays, variables, or functions some inbuilt properties and methods are attached to our declaration at runtime.
- Under the hood, the JS engine assigns these hidden properties via the **Prototype Object called Prototype or \_\_proto\_\_**
- Basically via prototype one object is able to access the methods and properties of another object.
- **Both prototype and **proto** are same**

```js
const person = {
  name: "Sandeep",
  age: "29",
  gender: "Male",
};

const employmentDetails = {
  company: "Publicis Sapient",
  doj: "21/09/2021",
};

console.log(person.company); // undefined
// person ---> Object.Prototype ---> null

person.__proto__ = employmentDetails; // setting the prototype for person object

console.log(person.company); // Publicis Sapient
// person ---> employmentDetails ---> Object.Prototype ---> null
```

## Difference between prototype Vs \***\*proto\*\***

- For Constructor function (inbuilt or declared Explicitly) or any normal function → **prototype works**
- For any variable/instance ⇒ \***\*proto\*\***
- Note: For Arrow functions: **does not have a default prototype property**

```js
// For declared variables
const someArray = [];
someArray.__proto__; // prototype object
someArray.prototype; // undefined

Array.prototype; // prototype object
Array.__proto__; // undefined

// Arrow function
const someArrowFunction = () => {}; //
someArrowFunction.prototype; // undefined
```

## Ways to create prototype:

- Normal object creation:

```js
const abc = {
  a: 1,
  __proto__: {
    b: 2,
  },
};
// abc ---> {b:2} ---> Objet.prototype ---> null
```

- Using constructor function:

```js
function Bottle(){
    this.type= 'Plastic',
    this.capacity = '500ML',
}

Bottle.prototype.color = function(color){
    this.color = color,
}
// abc ---> {b:2} ---> Objet.prototype ---> null
```

- Similarly using classes
- USing object.create()
- Using object.setPrototypeOf()

## Difference between hasOwnProperty vs object[key] while iterating over the object

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
