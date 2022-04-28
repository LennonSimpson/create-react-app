import React, { useState } from 'react';

export default function Square({value}) {
    const [count, setCount] = useState(0);
    return (
        <button className="square" onClick={()=> setCount()}>
          {count}
        </button>
      );
};