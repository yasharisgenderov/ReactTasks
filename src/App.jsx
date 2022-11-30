import React, {useState} from 'react'
import './App.css'
import  CustomButton  from './components/CustomButton'

function App() {
  return (
    <div className="App">
     <CustomButton  text='Button' warnMessage='ok' hint="ok"/>
     <CustomButton  text='Submit' warnMessage='alert'/>
     <CustomButton  text='Check' warnMessage='warning'/>
    </div>
  )
}

export default App
