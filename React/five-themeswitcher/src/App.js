import React, {useState} from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App =(props)=>{

  const themeHook = useState('light');
  return (
    <ThemeContext.Provider
     value={themeHook}
    >
   <div>
    <Header/>
    <HeroSection/>
   </div>

   {props.children}
    </ThemeContext.Provider>
  )

}


export default App;
