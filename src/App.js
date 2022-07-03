import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Navigate,BrowserRouter, Routes } from 'react-router-dom';
import Switch from "react-switch";
import Home from  "./components/Home";
import Blog from './components/Blog';
import ProductPad from './components/ProductPad';
import MiddleBanner from './components/MiddleBanner';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryCarousel from './components/CategoryCarousel';
import Footer from './components/footer';
import routes from './routes';



class App extends React.Component {
  
  render() {
   
    return (
        
//       <div className="MainDiv">
     
//         <div class="humberger__menu__overlay"></div>

//          <Home/>
         

// </div> 

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/vegetables" element={<FeaturedProducts />}>
  <Route path="/meat" element={<FeaturedProducts />}></Route>
    
  {/* {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <DefaultLayout {...props} uid={this.props.uid}/>} />
                    ) : (null);
                  })} */}
  </Route>
</Routes>
</BrowserRouter>
)
};
}
export default App;
