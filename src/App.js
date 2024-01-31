import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber,decNumber} from './action/index';

function App() {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch()
  return (
    <>
    <div className=" container App">
      <h1>Basic App with Redux</h1>
    </div>
    <div className=" container App">
    <h2>Increment/Decrement App</h2>
    <h4>With the help of reducers and redux</h4>
    <div >
      <button className='btn' onClick={()=>dispatch(decNumber()) }>-</button>
      <input  className='input' type="text"  value={mystate} />
      <button className='btn' onClick={()=>dispatch(incNumber()) }>+</button>
    </div>

  </div>
    </>
    
  );
}

export default App;
