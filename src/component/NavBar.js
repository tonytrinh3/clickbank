import React from 'react';


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './NavBar.css';

function NavBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    return (
      <div className = "Nav-Bar">
        <img src = "https://www.clickbank.com/wp-content/uploads/2017/11/ClickBank_Logo_WEB-7.png" alt="logo"/>
        <div className = 'item'>
            <h3>Affiliate MarketPlace</h3>
        </div>

      </div>
    );
  }
  


export default NavBar;



