import { useState } from 'react'
import Editor from "./Editor.jsx"

function App() {


  return (
    <>
    <Editor/>
    <Editor/>
    <Editor/>
    
    <div className='pane top-pane'></div>
    <div className='pane'
    title='output'
    sandbox="allow-scripts"
    frameBorder="0"
    height="100%"
    width="100%"
    />

    </>
  )
}

export default App
