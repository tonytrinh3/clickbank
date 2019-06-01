import React from 'react';
import './App.css';


import Header from './Header';
import NavBar from './NavBar';
import Slideshow from './Slideshow';
import SideBar from './SideBar';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';


function App() {
  return (
    <div>
     <Header/>
     <NavBar/>
     <div>
        <Slideshow/>
     
        <div>
          <div>
            <SideBar/>
          </div>
          
          <div>
            <FeaturedProducts/>
          </div>

        </div>

     </div>
    
      <Footer/>

        




    </div>
  );
}

export default App;
