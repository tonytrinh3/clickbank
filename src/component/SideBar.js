import React from 'react';
import './SideBar.css';
import categoriesData from '../data/categoriesData';


class SideBar extends React.Component{  

    state = { hideResults: true };

    handleClick= () =>{
        if (this.state.hideResults){
          this.setState({ hideResults: false });
        }
        else{
          this.setState({ hideResults: true });
        }
      
    }


    

    render(){

        function Results(){
            // const subCategories = categoriesData.map((category)=>{
            //     return category.Sub_Category[1]
            // })
            
            // return subCategories
            return(
                <div className = "content">
                    <a className = 'side-bar-link'>Art</a>
                    <a className = 'side-bar-link'>Body Art</a>
                    <a className = 'side-bar-link'>Dance</a>
                    <a className = 'side-bar-link'>Fashion</a>
                    <a className = 'side-bar-link'>Film & Televsion</a>
                    <a className = 'side-bar-link'>General</a>
                    <a className = 'side-bar-link'>Magic Tricks</a>
                    <a className = 'side-bar-link'>Music</a>
                    <a className = 'side-bar-link'>Photography</a>
                    <a className = 'side-bar-link'>Radio</a>
                </div>
            )
          };

        return(
            <div>
                <header className = 'side-bar-header'>Categories</header>
    
                <nav className = 'side-bar'>
                        <a className = 'side-bar-link' onClick={this.handleClick}>Art & Entertainment</a>
                        { !this.state.hideResults && <Results/> }
                          
                        <a className = 'side-bar-link'>Business/Investing</a>
                        <a className = 'side-bar-link'>Computers/Internet</a>
                        <a className = 'side-bar-link'>E-Business & E-Marketing</a>
                        <a className = 'side-bar-link'>Education</a>
                </nav>
         
            </div>
        )

    }

};



export default SideBar;

const subCategories = categoriesData.map((category)=>{
    return category.Sub_Category
})

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