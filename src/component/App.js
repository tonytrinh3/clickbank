import React from 'react';
import './sass/App.scss';


import Header from './Header';
import NavBar from './NavBar';
import Slideshow from './Slideshow';
import SideBar from './SideBar';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';


function App() {
  return (
    <div className = "main-page-container">
      <div className ="main-body-header">
        <Header/>
      </div>
      <div className ="main-body-navbar">
        <NavBar />
      </div>
     <div className = 'main-body-slideshow'>
      <Slideshow />
     </div>
      
        
          <div className = "main-page-side-bar">
            <SideBar/>
          </div>
          <div className = "main-page-feature-products">
            <FeaturedProducts/>
          </div>
        
      
    
    <Footer/>

        




    </div>
  );
}

export default App;
