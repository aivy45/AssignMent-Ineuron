import React, {useState} from 'react';
import Icon from './components/Icons'


// toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
      
// reactstrap    
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


const itemArray = new Array(9).fill("empty");


const App=()=> {

 const [isCross, setIsCross]=useState(false);
 const [winMessage, setWinMessage]=useState("");


//  reload the game 
 const reloadGame = ()=>{
  setIsCross(false);
  setWinMessage("");
  itemArray.fill("empty",0,9);
 }

// check winner 
const checkIsWinner = ()=>{
 
  if(itemArray[0]=== itemArray[1] && 
    itemArray[0]=== itemArray[2] && 
    itemArray[0]!="empty")
    {
     setWinMessage(`${itemArray[0]} won`);
    }
    else if(itemArray[3]=== itemArray[4] && 
     itemArray[4]=== itemArray[5] && 
     itemArray[3]!="empty")
     {
      setWinMessage(`${itemArray[3]} won`);
     }
     else if(itemArray[6]=== itemArray[7] && 
         itemArray[7]=== itemArray[8] && 
         itemArray[6]!="empty")
         {
          setWinMessage(`${itemArray[6]} won`);
         }
     else if(itemArray[0]=== itemArray[3] && 
         itemArray[3]=== itemArray[6] && 
         itemArray[0]!="empty")
         {
          setWinMessage(`${itemArray[0]} won`);
        }
        else if(itemArray[1]=== itemArray[4] && 
         itemArray[4]=== itemArray[7] && 
         itemArray[1]!="empty")
         {
          setWinMessage(`${itemArray[1]} won`);
         }

         else if(itemArray[2]=== itemArray[5] && 
             itemArray[5]=== itemArray[8] && 
             itemArray[2]!="empty")
             {
              setWinMessage(`${itemArray[2]} won`);
             }

             else if(itemArray[0]=== itemArray[4] && 
                 itemArray[4]=== itemArray[8] && 
                 itemArray[0]!="empty")
                 {
                  setWinMessage(`${itemArray[0]} won`);
                 }
         
        else if(itemArray[2]=== itemArray[4] && 
             itemArray[4]=== itemArray[6] && 
            itemArray[2]!="empty")
             {
            setWinMessage(`${itemArray[2]} won`);
             }         

}

// change item 
const changeItem = (itemNumber)=>{
   if(winMessage){
    return toast(winMessage, {type:"success"})
   };

   if(itemArray[itemNumber]==='empty')
   {
      itemArray[itemNumber]= isCross ? 'cross' : 'circle' ;
      setIsCross(!isCross);
   }
   else{
    return toast("already filled", {type:"error"});
   }
   checkIsWinner();
}



  return (
    <Container className='p-5'>

  <Row>
    <Col md={6} className='offset-md-3'>
      {winMessage ? (
        <div className='mb-2 mt-2'>
          <h1 className='text-success text-uppercase text-center'>{winMessage}</h1>
          <Button color='success' block onClick={reloadGame}>Reload the Game</Button>
        </div>
      ) :(
        <h1 className='text-center text-warning'>
          {isCross ? "Cross" : "Circle"} turns
        </h1>
      ) }
       <div className='grid'>
        {itemArray.map((item, index)=>(
          <Card onClick={ ()=> changeItem(index)} color="success">
            <CardBody className='box'>
              <Icon name={item}/>  
              {/* // itemArray[index];  can also write*/}
            </CardBody>
          </Card>
        ))}
       </div>
    </Col>
  </Row>

  <ToastContainer position='top-center'/>
    </Container>
  );
}

export default App;
