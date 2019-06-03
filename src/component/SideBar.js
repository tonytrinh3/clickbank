import React from 'react';
import './SideBar.css';
import Search from './Search';

class SideBar extends React.Component{  
    render(){
        return(
            <div>
                <header className = 'side-bar-header'>Side Bar</header>
    
                <nav className = 'side-bar'>
                        <a className = "collapsible">Art & Entertainment</a>
                            <a className = "content">Art</a>
                            <a className = "content">Body Art</a>
                        <a className = "collapsible">Business/Investing</a>
                        <a className = "collapsible">Computers/Internet</a>
                        <a className = "collapsible">E-Business & E-Marketing</a>
                        <a className = "collapsible">Education</a>
                </nav>
            <Search/>
            </div>
        )

    }

};

export default SideBar;

{/* <a>Employment & Jobs</a>
<a>Fiction</a>
<a>Food, Wine & Cooking</a>
<a>Games</a>
<a>Green Products</a>
<a>Health & Fitness</a>
<a>Home & Garden</a>
<a>Languages</a>
<a>Mobile</a>
<a>Parenting & Famiaes</a>
<a>Poatics/Current Events</a>
<a>References</a>
<a>Self Help</a>
<a>Software & Services</a>
<a>Spirituaaty, New Age & Alternative Beaefs</a>
<a>Sports</a>
<a>Travel</a> */}