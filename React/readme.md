## REACT QUESTIONS:

### Q.1 What’s React and What are the advantages of it?

Ans.

#### React is a open-source JS library.

- It is developed by facebook.
- It is used to building interactive user interfaces and web applications.
- Some advantages of react are:
  - Virtual DOM
  - JSX
  - Components
  - Simplicity
  - Performance
  - One way data binding. ( Props pass from parents to children not vice-versa )

### Q.2 What's Virtual Dom in React & What are the advantages of it?

#### Ans.

- ReactJs never update the original DOM directly, In react there is a replica of the DOM called Virtual DOM.
- Whenever there is add/delete/update it’s on virtual DOM, and finally only that particular portion of the page (Node) affected not whole page.
  So which part need to be changed in DOM is called Reconciliation.

### Q.3 Explain LifeCycle of React Components?

#### Ans.

- Mounting ( component added to the DOM )
- Updating ( updation in component via props or via state change )
- Unmounting ( removing component from the DOM ).

### Q.4 Whats the difference between between Functional Components and Class Components?

#### Ans.

- Functional components are simply JavaScript functions that return JSX.
- They do not have any lifecycle methods or state..
- This makes them much simpler to write and understand.

- Class components are JavaScript classes that extend React Component.
- They have lifecycle methods that are not available in functional components.
- This makes more complex to write and understand.

### Q.5 What are the hooks in React & Can we use Hooks in Class Components?

#### Ans. Hooks allow function components to have access to state and other React features.

- They don't work inside classes .
  Common use hooks in the function components are:
- useState(), useEffect(), useNavigate();

### Q.6 What are the LifeCycle method and the advantages of it?

#### Ans

- This methods allow you to perform tasks such as initializing state, updating the DOM, and cleaning up resources..
- Here are the main lifecycle methods in React:

  - constructor(): This method is called when the component is first created.
  - render(): This method is called whenever the component needs to be rendered.
    -componentDidMount(): This method is called after the component has been rendered for the first time.
  - componentDidUpdate(): This method is called whenever the component is updated.
  - componentWillUnmount(): This method is called before the component is removed from the DOM.

- Advantages of it:
  lifecycle methods have been valuable in managing component behavior, handling side effects, and optimizing performance in React applications.

### Q.7 What’s useState Hook & Advantages of it?

#### Ans.

- useState is a React hook that allows you to manage state in functional components.
- It returns an array with two elements: the current state value and a function to update that value.
- const [count, setCount] = useState(0);

- The useState hook is a great way to manage state in functional components because it is:
  - Efficient: The useState hook only updates the state when the value is actually changed. This can improve performance, especially in large applications.
  - Reusable: The useState hook can be used in any functional component, making it easy to reuse code.

### Q.8 Explain useEffect & Advantages of it

#### Ans.

- The useEffect hook is a React hook that allows you to perform side effects in functional components.
- Side effects are any changes to the DOM, API calls,fetching data, directly updating the DOM, or other operations that have an impact outside of the component itself.

### Q.9 Explain Context Api and create a minor project on it.

- Create dashboard and with button on clicking on that change theme to dark and light

### Ans.

- The Context API is a feature in React that provides a way to share data between components without passing props through all the intermediate components.
- It allows you to create global data that can be accessed by any component in the component tree,
  The Context API consists of two main parts: the context provider and the context consumer.

- Dashboard link:. [Theme Switcher with context api](https://github.com/aivy45/AssignMent-Ineuron/tree/main/React/five-themeswitcher)

### Q.10 Explain useReducer and Its advantages.

#### Ans.

- useReducer is a React hook that allows you to manage complex state in functional components.
- It is a more powerful alternative to useState when you need to manage multiple pieces of state that are related to each other.

- So Its advantages are:
  - We don’t need to make multiple useState Hooks as we can say that it is one many army in context with useState Hook as it can handle so many states together.

### Q.11 build a Todo Web App Using React and useReducer Hook.

#### Ans. ………..

### Q.12 Build A simple counter app using React.

#### Ans. ……….done [Counter App](https://github.com/aivy45/AssignMent-Ineuron/tree/main/React/three-state-counter)

### Q.13 Build Calculator Using React Only

#### Ans. done [Calculator](https://github.com/aivy45/AssignMent-Ineuron/tree/main/React/calculator)

### Q.14 Build a Tic Tac Toe Game using Class Component of React

#### Ans. done [ Tic Tac Toe Link](https://github.com/aivy45/AssignMent-Ineuron/tree/main/React/four-tictactoe)

### Q.15 Explain Prop Drilling & How can we avoid it?

#### Ans.

- Prop drilling is the process of passing data from a parent component to a child component through multiple levels of intermediate components.
- This can be done by passing the data as a prop to each intermediate component, until it reaches the child component that needs it.
- Prop drilling can be a problem because it can lead to code that is difficult to read and maintain.
- To avoid it:
- To avoid prop drilling is to use the React Context API.
- The Context API provides a way to share data between components without having to pass it down as props.

### Q.16 Create a task manager where user can create tasks and see his task

#### Ans. Link [Task Manager like Todo](https://github.com/aivy45/TodoMERN)
