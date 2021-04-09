import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './components/Navbar'
import './App.css'
import ShowCase from './components/ShowCase'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="main">
      <ShowCase />
      </div>
    </div>
  )
}

ReactDom.render(<App/>, document.getElementById('root'))