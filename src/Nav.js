import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
 
  import "./App.css"


class Navbar extends React.Component {
    constructor (props) {
        super(props)
      }
      render(){
          const navStyle ={
              color :"Black"
          }
          return(
            <nav>
                <h1>Hojozat.com</h1>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                    <h3>Home</h3>
                    </Link>
                    <Link style={navStyle} to="/about">
                    <h3>About</h3>
                    </Link>
                </ul>
            </nav>
        
            
          )
      }
}

export default Navbar;