import React from 'react';
import './sass/main.scss';


function Navigation(){
  
  
    return (
      <div className = "navigation">
        <img className = 'nav-bar-img' src = "https://www.clickbank.com/wp-content/uploads/2017/11/ClickBank_Logo_WEB-7.png" alt="logo"/>
        <div className = 'nav-bar-button-group'>
            <a className = 'nav-bar-button'>Affiliate MarketPlace</a>
            <a className = 'nav-bar-button'>Support</a>
            <a className = 'nav-bar-button'>Create Account</a>
            <a className = 'nav-bar-button'>Login</a>
        </div>

      </div>
    );
  }
  


export default Navigation;



