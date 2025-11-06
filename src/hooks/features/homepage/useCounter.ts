import { useState } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  const increment = () => {
    setCount(prev => prev + val);
  };

  /* 
  const updateVal = (newVal) => {
    // increment one time using **old val**
    setCount(prev => prev + val);
    // then update val
    setVal(newVal);
  };*/

  //return { count, val, increment, setVal: updateVal };
  return { count, val, increment, setVal};
}
