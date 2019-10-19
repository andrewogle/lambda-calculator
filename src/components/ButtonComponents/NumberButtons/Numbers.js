import React, {useState} from "react";
import NumberButtons from './NumberButton'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers }from '../../../data'
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [num, setNum]= useState(numbers)
  console.log(num)
  console.log(numbers)
  return (
    <div>
    {/* STEP 3 - Use .map() to iterate over your array data and return a button
     component matching the name on the provided file. Pass
     it any props needed by the child component*/}
     {num.map((button, index) => (
       
       <NumberButtons number = {button} key = {index}/>
    
     ))};
  </div>
  );
};

export default Numbers