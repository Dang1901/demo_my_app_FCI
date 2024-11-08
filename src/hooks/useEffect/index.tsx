import React, { useState } from 'react'
import FetchApi from './FetchApi';
import { Button } from '@mui/material';

const UseEffect = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant='outlined'
        onClick={() => setShow(!show)}
      >Toggle
      </Button>
       {show && <FetchApi/>}
    </>
   
  )
}

export default UseEffect