import React from 'react';
import Blog from './Blog';
import FeaturedProducts from './FeaturedProducts';
import MiddleBanner from './MiddleBanner';
import CategoryCarousel from './CategoryCarousel';
import ProductPad from './ProductPad';
import SideMenu from './SideMenu';
import Header from './Header';
import Footer from './footer';


function Home(){
  return(
    <div>
            <Header/>

<SideMenu />

        <CategoryCarousel />
        
        <FeaturedProducts />
                
        <MiddleBanner />
               
        <ProductPad />
              
        <Blog />

        <Footer/>
    </div>

  )
}

export default Home;