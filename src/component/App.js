import React from 'react';
import './sass/App.scss';


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
     <div className = 'slideshow'>
      <Slideshow />
     </div>
      
        
          <div className = "sidebar">
            <SideBar/>
          </div>
          <div className = "main-page-feature-products">
            <FeaturedProducts/>
          </div>
        
      
    
          <div className = "footer">
            <Footer/>
          </div>

        




    </div>
  );
}

export default App;
