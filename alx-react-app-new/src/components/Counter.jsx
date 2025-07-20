import {useState} from 'react';

import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Current count: {count}</p>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrrement</button>
      <button  onClick={() => {setCount(0)}}>Reset</button>
    </div>
  )
}
