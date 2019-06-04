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
            const subCategories = categoriesData.map((category)=>{
                return category.Sub_Category[1]
            })
            
            return subCategories
          };

        return(
            <div>
                <header className = 'side-bar-header'>Categories</header>
    
                <nav className = 'side-bar'>
                        <a onClick={this.handleClick}>Art & Entertainment</a>
                        { !this.state.hideResults && <Results/> }
                          
                        <a>Business/Investing</a>
                        <a>Computers/Internet</a>
                        <a>E-Business & E-Marketing</a>
                        <a>Education</a>
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