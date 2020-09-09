import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">  
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
