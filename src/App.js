import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Navigate,BrowserRouter, Routes } from 'react-router-dom';
import Switch from "react-switch";
import Home from  "./components/Home";
import CategoryDetails from './components/CategoryDetails';
import Blog from './components/Blog';
import ProductPad from './components/ProductPad';
import MiddleBanner from './components/MiddleBanner';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryCarousel from './components/CategoryCarousel';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/footer';
import routes from './routes';



class App extends Component {
  
  render() {

    // const routeComponets = routes.map((route, idx) => {
    //   return route.component ? (
    //     <Route
    //     key={idx}
    //     path={route.path}
    //     name={route.name}
    //     element={route.component} />
    //   ) : (null);
    // })

    const getRoutes = (routes) =>
    routes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return <Route exact path={route.path} element={route.component} key={route.key} />;
      }

      return null;
    });
    return (
        
 <div className="MainDiv">
<Header/>

<SideMenu />

<BrowserRouter>
<Routes>
<Route path="/meat" element={<CategoryDetails id="1"/>}/>
{getRoutes(routes)}
</Routes>

{/* <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/vegetables" element={<CategoryDetails id="2"/>}/>
  <Route path="/meat" element={<CategoryDetails id="1"/>}/>
    
  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        name={route.name}
                        element={<CategoryDetails id={route.id}/>} />
                    ) : (null);
                  })}

</Routes> */}

</BrowserRouter>

</div> 
)
};
}
export default App;
