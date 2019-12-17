import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';


class NavO extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        // redirect: false
      }
    }
    render () {
        return (
            <div>
            
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            <Link to="/">Home</Link>   
                        </Typography>

                        <Typography variant="h6" color="inherit">
                        <Link to="/">Catogry</Link>    
                        </Typography>
                        
                        <Typography variant="h6" color="inherit">
                        <Link to="/owner"> Add item</Link> 
                        </Typography>

                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleMenu}
                            color="inherit"
                        >
                            <Link to="/profileO"><AccountCircle /></Link>
                        </IconButton>
                    </Toolbar>
                    </AppBar> 


                
            </div>
        )
    }
}


    export default NavO;

