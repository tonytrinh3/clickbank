import React from 'react';

import './sass/main.scss';
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
                    <a className = 'sidebar__link'>Art</a>
                    <a className = 'sidebar__link'>Body Art</a>
                    <a className = 'sidebar__link'>Dance</a>
                    <a className = 'sidebar__link'>Fashion</a>
                    <a className = 'sidebar__link'>Film & Televsion</a>
                    <a className = 'sidebar__link'>General</a>
                    <a className = 'sidebar__link'>Magic Tricks</a>
                    <a className = 'sidebar__link'>Music</a>
                    <a className = 'sidebar__link'>Photography</a>
                    <a className = 'sidebar__link'>Radio</a>
                </div>
            )
          };

        return(
            <div className = 'sidebar'>
                <header className = 'sidebar__header'>Categories</header>
    
                <nav>
                        <a className = 'sidebar__link' onClick={this.handleClick}>Art & Entertainment</a>
                        { !this.state.hideResults && <Results/> }
                          
                        <a className = 'sidebar__link'>Business/Investing</a>
                        <a className = 'sidebar__link'>Computers/Internet</a>
                        <a className = 'sidebar__link'>E-Business & E-Marketing</a>
                        <a className = 'sidebar__link'>Education</a>
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