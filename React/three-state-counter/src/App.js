import React from 'react'; 
import { useState } from 'react';
import './App.css';

const App=()=>{

  const [count,setCount]= useState(0);
  // const [count,setCount]= useState(false);
  // const [count,setCount]= useState("string");
  // const [count,setCount]= useState({
  //   name:"akshun",
  //   college:"Mait delhi"
  // });

  
   return (
        <div className='App'>
         <header>
          <h1>Counter app using States/hooks</h1>
         </header>
         <h2>Current value of count is {count} </h2>
         <button onClick={()=> setCount(0)}>Reset Counter</button>
         <button onClick={()=> count>=10 ? "" : setCount(count+1)}>Increase Counter</button>
         <button onClick={()=> count<=0 ?"" : setCount(count-1)}>Decrease Counter</button>
        </div>
   );
}

export default App;

