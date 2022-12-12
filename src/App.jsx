import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import styled from 'styled-components'

const Tag = styled.div`
  position: relative;  
  color: white;    
  background:${props => (props.tagColor)};
  width: 80px;
  padding: 8px 12px;
  margin: 4px;
  border-radius: 18px;
  font-size: 1em;
  font-weight: 400;
  transition: background-color 2s linear
`

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16)

function App() {
  const [tagColor, setTagColor] = useState('red')
  
   setInterval(() => {
    setTagColor(randomColor);    
  }, 3000);

  return (
    <div className="App">
      {/* <h1 style={{ color: {tagColor} }}>Here</h1> */}
      <Tag tagColor={tagColor}>Java</Tag>
      <Tag tagColor={tagColor}>Kotlin</Tag>
      <Tag tagColor={tagColor}>Android</Tag>      
      <Tag tagColor={tagColor}>JavaScript</Tag>  
    </div>
  )
}

export default App
