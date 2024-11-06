import React, { memo } from 'react'

const Content = ({onIcrease}) => {

    console.log('content re-render');
    
  return (
    // <div>Content {count}</div>
    <>
        <div>Content</div>
        <button onClick={onIcrease}>Click me</button>
    </>
  )
}

export default memo(Content)