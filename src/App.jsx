import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import styled from 'styled-components'

const Tag = styled.div`
  position: relative;  
  color: white;
  background:${props => (props.tagColor)};
  padding: 20px 22px;
  border-radius: 24px;
  font-size: 2em;
  transition: background-color 1s linear
`

function App() {
  const [tagColor, setTagColor] = useState('red')
  
  setTimeout(() => {
    const randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    setTagColor(randomColor);    
  }, 2000);

  return (
    <div className="App">
      {/* <h1 style={{ color: {tagColor} }}>Here</h1> */}
      <Tag tagColor={tagColor}>Here</Tag>      
    </div>
  )
}

export default App
