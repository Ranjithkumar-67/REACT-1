import  { useState } from "react";
import React,(useState)

import "./Counter.css";

const Counter = () =>{
    const [count,setCount] = useState(0);
}
const incrementCount = () => {
    setCount(count +1);
};
const decrementCount = () => {
    setCount(count - 1);
};
const resetCount = () => {
    setCount(0);
}
return {
    <div>
    <div classNmae = "container"></div>
}