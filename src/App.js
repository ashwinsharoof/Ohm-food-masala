import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import productadmin from'./productadmin';
import reciepeadmin from './reciepeadmin';
import product  from './product.js';
import Recipe from './Recipe.js';
import Contact  from './Contact.js';
import admincontact from './admincontact';
import adminlogin from './adminlogin';
import adminhome from './adminhome'
import blogcontent from './blogcontent'
import Protectedrouter from './protected'

class App extends Component {
  constructor(){
    super();
    this.state={
      toogle: true,
    }
  }  
  render(){
    return (
      <BrowserRouter>
      <div >
      <nav >
        <div class="logo"><img src="./ohm logo.jpg" class="logo_img"/></div>
        <div className="bar"><i className="fa fa-bars" onClick ={()=> this.setState({toogle: !this.state.toogle})}   ></i></div>
        
   <div class={this.state.toogle ? "nav-items " : "nav-links"}>
      
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/product">Product</Link></li>
      <li><Link to ="/recipe">Recipe</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
   
   </div>
  
</nav>

    
    <Route path="/" exact component={Home}/>
    <Route path="/product" exact component={product}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/recipe" exact component={Recipe}/>
    <Route path="/adminlogin" exact component={adminlogin}/>
    <Route path="/productadmin" exact component={productadmin}/>
    <Route path="/reciepeadmin" exact component ={reciepeadmin}/>
    <Route path="/blogcontent" exact component={blogcontent} />
    <Protectedrouter exact path="/adminhome" exact component ={adminhome}/>
    <Route  exact path="/admincontact" exact component={admincontact}   />
    </div>
 </BrowserRouter>
      
    );
  }
  
}

export default App;
