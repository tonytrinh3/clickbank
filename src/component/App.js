import React from 'react';
import './sass/main.scss';


import Header from './Header';
import Navigation from './Navigation';
import Slideshow from './Slideshow';
import SideBar from './SideBar';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';


function App() { //hi
  return (
    <div className = "container">
      <div className ="header">
        <Header/>
      </div>
      <div className ="navigation">
        <Navigation />
      </div>
    
      <Slideshow />
     
      
        
         
            <SideBar/>
          
         
            <FeaturedProducts/>
          
      
    
         
            <Footer/>
         

        




    </div>
  );
}

export default App;
