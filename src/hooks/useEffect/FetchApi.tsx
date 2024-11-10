
/* 
  Side Effect
  ======================================================================

  Event: Add / Removed / Listener
  Oserver pattern: Subscribe / Unsubscribe
  Closure
  Timer: setTimeout, cleanSetTimeout, setInterval, CleanSetInterval
  useState
  Mounted / UnMounted
  ===
  Call API

  =======================================================================

  1. Update DOM
  2. Call API
  3. Listen DOM Event
    - Scoll 
    - Resize
  4. Cleanup
    - Remove listener / Unsubscribe
    - Clear timer

  =======================================================================

  1. useEffect(callback)
      - Gọi callback mỗi khi component re-render
      - Gọi callback sau khi component thêm elemet DOM
  
  2. useEffect(callback, [])
      - Chỉ gọi callback 1 lần sau khi component mounted

  3. useEffect(callback, [dependentcy])
      - Callback sẽ được gọi lại mỗi khi dept thay đổi

  =======================================================================

  1. Callback luôn được gọi sau khi component mounted
  2. Clenup function luôn được gọi trước khi component unmounted tránh việc tràn dữ liệu 

*/

import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const tab = ['posts', 'comments', 'albums']

const FetchApi = () => {
    const [title, setTitle] = useState("")
    const [posts, setPosts] = useState([])
    const [types, setTypes] = useState('posts')
    const [showGoToScoll, setShowGoToScoll] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)
    

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      }) 
      // document.title= title

      // console.log("reder");
        // console.log('Mounting...');
        
      
    },[types])

    useEffect(() => {

      const handleScoll = () => {
        // console.log(window.scrollY);

        if(window.scrollY >= 200){
          setShowGoToScoll(true)
          // console.log('set state');
          // 
        } else {
          setShowGoToScoll(false)
        }
        
      }

      const handleResize = () => {
        setWidth(window.innerWidth)
        // console.log(window.resizeTo);
        
      }
      
      window.addEventListener('scroll', handleScoll)
      // console.log('addEventListener');
      
      window.addEventListener('resize', handleResize)

      // Cleanup function
      return () => {
        // console.log("Unmounting...");
        
        window.addEventListener('scroll', handleScoll)
        // console.log('removeAddEventListener');
        
        window.addEventListener('resize', handleResize)
      }

    },[]) 
    
    // console.log('re-render');
    

  return (
    <Box >
        <div>Width: {width}</div>

        {tab.map((item, index) =>(
            <Button 
              key={index} variant="contained" sx={{m: 1}}
              onClick={() => setTypes(item)}
            >{item}
            
            </Button>
        ))}

        <TextField
          value={title}
          label="Title"
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            m: 2  
          }}
        />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
          
        ))}
        { showGoToScoll && (
          <Button variant='contained' sx={{position: 'fixed', right: 20, bottom: 20}}>Go to Scoll</Button>
        )}
      </ul>

      
        123
    </Box>
  )
}

export default FetchApi