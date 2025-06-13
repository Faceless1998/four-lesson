import { useState, useMemo, useEffect } from "react"
import React from 'react'

const Memo = () => {

    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const advancedCalculation = useMemo(() => {
        let result = 0;
        for(let i = 0 ;i < 1000000000; i++){
            result += i;
        }
        return result;
    }, [count])

    // const advancedCalculation = () => {
    //     let result = 0;
    //     for(let i = 0; i<1000000000;i++){
    //         result += i;
    //     }
    //     return result;
    // }

    // useEffect(()=>{
    //     advancedCalculation();
    // },[count]);

  return (
    <div>
        {count} <br />
        {advancedCalculation} <br />
        <button onClick={() => setCount(count + 1)}>OK</button>
    </div>
  )
}

export default Memo