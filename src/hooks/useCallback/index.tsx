import React, { memo, useCallback, useState } from 'react'
import Content from './Content';



const UseCallback = () => {
  const  [count, setCount] = useState(0);
  // const  [count2, setCount2] = useState(0);

  // const increase = () => {
  //   setCount(count + 1)
  //   // console.log(setCount);
    
  // }
  // const increase2 = () => {
  //   setCount2(count2 + 1)
  //   // console.log(setCount);
    
  // }

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  },[])
 
  return (
    <>
      <div style={{padding: '10px 32px'}}>
        
        <Content onIcrease={handleIncrease}/>

        {/* <Content count={count}/>
        <h1>{count}</h1> */}
        <h1>{count}</h1>
        {/* <button onClick={increase}>Click me</button> */}
        <br />
        {/* <button onClick={increase2}>Click me2</button> */}
        {/* <button onClick={handleIncrease}>Click me</button> */}
      </div>
    </>
  )
}

export default UseCallback