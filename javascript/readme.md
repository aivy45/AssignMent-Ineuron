## JAVASCRIPT QUESTIONS

### QUESTION 1. HOISTING IN JS

#### ANS. It is a phenomenon in JS where we can access functions and variables in js before initialization, without any error.

- It is all because of GEC (Global Execution Context).
- The first phase is the memory allocated phase and the second phase is the initialization phase.
- So the concept of hoisting comes, when we access variables and function in js before initialization.
- All this happens because before execution of code the memory is allocated to variables and in case of function the whole code is put, as it is.
- So when we call variables before declaration / initialization it gives us undefined as only the first phase of GEC gets over which is memory allocation phase but not the second phase that is initialization phase.
- But if we call a function, it gives us the desired output because in case of function the whole code is put, as it is in GEC.

### QUESTION 2. What are different higher order functions in JS? What is the difference between .map() and .forEach() ?

#### Ans. It is a function that accepts another function as an argument or returns a function as a return value or both.

- Eg: map(), filter() etc.

```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
```

```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

- Difference between map() and forEach();
  - map: The map function returns a new array. It iterates over the entire array and return the array in modified form according to our need.
  - map function is commonly used when we want to transform each element of an array and collect the transformed values into a new array.
  - It is useful when you need to perform some operation on each element and create a modified version of the original array.
- Eg:

```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
```

- forEach: The forEach function does not return anything. It simply iterates over the elements of an array.
- Eg;

```
 const number= [1, 2, 3 ,4, 5, 6];
fruits.forEach(fruit => console.log(number));
```

### QUESTION 3. What is the difference between .call() .apply() and .bind()? explain with an example !

#### Ans. call:

- The call method is used to invoke a function immediately with a specified this value and individual arguments.
- It accepts the this value as the first parameter, followed by the individual arguments.

Eg:

```
Let name = {
 Fname: “Akshun”,
Lname: “verma”,
}

Let print =  function(place){
 console.log(this.Fname + “ ” + this.Lname + place );
}

print.call(name , “Jammu”);    // Akshun Verma Jammu
```

- apply :
  - The apply method is similar to call but accepts an array (or array-like object) of arguments.
  - Eg:

```
Let name = {
 Fname: “Akshun”,
Lname: “verma”,
}

Let print =  function(place){
 console.log(this.Fname + “ ” + this.Lname + place );
}

print.apply(name , [Jammu]);    // Akshun Verma Jammu
```

- Bind:
- It does not directly invoke the method butt gives the copy of the exact same method which can be invoke later.

- Eg:

```
Let name = {
 Fname: “Akshun”,
Lname: “verma”,
}

Let print =  function(place){
 console.log(this.Fname + “ ” + this.Lname + place );
}

Let printMethod = print.bind( name, ‘Jammu’);
printMethod();   // Akshun Verma Jammu
```

### Q.4 Explain Event bubbling and Event Capturing in JavaScript with suitable examples.

#### Ans. Event Bubbling:

- When event trigger at the innermost child, and then triggers to its parents of the same nested hierarchy, or can say that it propagates upward through its ancestors
- But the condition is that the event should be on the same hierarchy.
- Example: If there is a event on the innermost child on click then if we click on innermost child then that click effect would also show on its parents and so on, but the condition is that it only shows on the same nested hierarchy.

- On Html file

```
<div id="outer">
  <div id="inner">
    <button id="button">Click me!</button>
  </div>
</div>
```

- On Js file

```
const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  console.log("Button click!");
});


innerDiv.addEventListener("click", function() {
  console.log("Inner div click!");
});

outerDiv.addEventListener("click", function() {
  console.log("Outer div click!");
});
```

- When you click the button, the event handlers are triggered in the following order: Button clicked! → Inner div clicked! → Outer div clicked!. The event starts at the button, bubbles up to the inner div, and finally reaches the outer div.

- Event Capturing:
  - Type of event propagation where the event is first captured by the outermost element and then to its descendants (children) of the same hierarchy, still it reaches the innermost DOM elements.
  - We can say that it is the reverse of event propagation.
    when we click on the outer div, the event handlers are triggered in the following order: Outer div clicked! → Inner div clicked! → Button clicked!

### Q.5 What is function currying with example?

#### Ans. function currying:

- It is a technique in functional programming that transforms the function of multiple arguments into several functions of a single argument in sequence.
- We simply wrap a function inside a function, which means we are going to return a function from another function . The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends.

- Eg:

```
 function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(2)(3)(4));    // 24
```

### Q.6 Explain execution context diagram of following code snippets, use white board to draw execution context diagram.

- Code Snippet 1 console.log('First'); setTimeout(() => console.log('Second'), 0); console.log('Third');

- Code Snippet 2
  console.log('First');
  function secondCall()
  { console.log('Second'); }
  setTimeout(secondCall, 2000);
  setTimeout(() => console.log('Third'), 0);
  console.log('Third');

### Ans

- For Snippet 1
  ![](./assessment%20js.png)

- In this The first line of code, console.log('First');, is executed in the Global Execution Context. The second line of code, setTimeout(() => console.log('Second'), 0);, creates a new Function Execution Context.
- The third line of code, console.log('Third');, is also executed in the Global Execution Context.

- The code in the Function Execution Context is executed until it reaches the end of the function. When the code reaches the end of the function, the Function Execution Context is destroyed

- For Snippet 2
  ![](./assessment%20js%202.png)

- the code snippet logs 'First' to the console,
  schedules the execution of
- secondCall() after 2000 milliseconds,
  And logs 'Second' and
  After that execute'Third' .

### Q.7 What are promises? What are the different states of a promise? Support your answer with an example where you need to create your own promise.

#### Ans. Here with promise the concept of async, await and resolve and reject will also come.

Now lets light on all these concept.

- Promises in JavaScript are a way to handle asynchronous operations.

```
---------Async / Await / Promise / Resolve / Reject ------------
```

- async keyword is used with await
- promise (might be fullfiled or not) / so resolve and reject
- so as we return some value similarly we return resolve or reject
- As js won't wait for any function means if one function has timeOut then it runs next function.
- But we want that if function will run (timeOut) then only next function will implement
- In that case we use await keyword which is accompanied by async

- eg:

```

const uno = ()=>{
  return "I am one";
}

const duo = ()=> {
  return new Promise( (resolve, reject)=>{
     setTimeOut(()=>{
     resolve("I am two");
} , (3000) );
} );
};

const tres = ()=>{
return "I am three";
};



const callMe = async () =>{
 let valOne = uno()
    console.log(valOne);
    let valTwo =await duo()
    console.log(valTwo);
    let valThree = tres()
    console.log(valThree);
};

callMe();    // I am one
             // I am two            // it wil execute after 3000ms
             // I am three
```

- as here we use async and await and above use promise and in promise we are calling timeOut function as js won't wait , but in this case it will wait for duo function
  and after that tres() function will implement

### Q.8 What is ‘this’ keyword in JavaScript? explain with an example & create .

#### Ans. In JavaScript, the this keyword refers to the current execution context or the object that the function is being executed in.So basically it refers to the object which is being executed.

- Creating :
- eg:

```
const person = {
  fname: 'Akshun’',
  lname: ‘Verma’,
age: ‘21’,
  print: function() {
    console.log(`Hello, my name is ${this.fname} ${this.lname} and I'm ${this.age} years old.`);
  }
};

person.print();  // Hello my name is Akshun Verma and I’m 21 years old.
```

### Q.9 Explain event loop Call Stack Callback queue and Micro Task queue in Your Words (2 Marks)

#### Ans. 1. Event loop:

- The event loop is responsible for managing the execution of JavaScript code in a single-threaded environment.
- It continuously checks the call stack and the queues for tasks to execute.
- Its primary job is to ensure that tasks are executed in a specific order.
- #### 2. Call Stack:

  - The call stack is a data structure that keeps track of function calls in a program.
  - It follows a Last-In-First-Out (LIFO) approach.
  - When a function is called, it is pushed onto the top of the stack from the callback queue and when it completes, it is popped off the stack.
  - This stack determines the order in which functions are executed.

- 3. Callback queue

  - The callback queue (also known as the task queue or message queue) is a queue that holds tasks or events waiting to be processed.
  - These tasks typically include asynchronous callbacks, such as setTimeout, setInterval or DOM event handlers.
  - When these asynchronous tasks are ready to be processed, they are added to the callback queue.
  - The callback queue holds these tasks until the call stack is empty and ready to process them.

- #### 4. MicroTask Queue:
  - The microtask queue is a special queue that holds microtasks
  - Microtasks are tasks with higher priority than regular tasks in the callback queue.
  - These tasks are added to the stack by the event loop as they have high priority.
  - So these tasks are executed first.

### Q.10 Explain Debouncing and Create a project where you are using Debouncing.

#### Ans.

- Debouncing is a technique used in JavaScript to limit the frequency of certain actions or function calls.
- It is particularly useful when dealing with events that may trigger rapidly, such as scroll events or keypress events.
- The optimisation increases by reducing the unnecessary function execution.
- The basic idea behind debouncing is to delay the execution of a function until after a specific period of inactivity.
- This ensures that the function is only executed once the event has paused for a certain duration.
- So in short 1
  - Debouncing is a technique used to prevent a function from being called too frequently.
    - It works by delaying the execution of the function until a specified amount of time has passed since the last time it was called.
  - This can be useful for improving performance, preventing unwanted side effects, or simply making code more readable.

Project: add link vs code: [ Debounce in js link](https://github.com/aivy45/AssignMent-Ineuron/tree/main/javascript/debounce)

### Question.11 Explain Closures and Use cases of Closures (2 Marks)

#### Ans.

- A closure gives you access to an outer function's scope from an inner function.
- A closure is created when an inner function is defined inside an outer function.
- The inner function has access to the variables and parameters of its outer function, as well as the global scope.

- Use cases of closures:
  - Data Privacy
  - Encapsulation

#### Q.12 Create a Blog web app using JavaScript (10 Marks) - Fetch data from https://jsonplaceholder.typicode.com/posts and show it to ui - User can also add new blog - Add Delete functionality also

##### Ans. ……………………
