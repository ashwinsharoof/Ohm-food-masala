import React, {Component} from 'react';
import "./home.css";
import "./reciepe.css";
import axios from 'axios';

class Home extends Component{
  constructor(){
		super();
		this.state = { 

            name: "",
            content: "",
            blog: [],
            about: [],
			

    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/info/reciepe').then(res =>{
        console.log(res.data);
        const blog = res.data;
        this.setState({blog});
})
axios.get('http://localhost:4000/info/about').then(aboutres=>{
  console.log("about")
  console.log(aboutres)
  const about = aboutres.data;
  this.setState({about});
})
this.setState({
  update: false
})
    
}
  render(){
    return(
      <div>
        	<div className="home_box">
	        <div className="sidenav">
		      <a href="#"><i className="fa fa-facebook"></i></a>

		      <a href="#"><i className="fa fa-instagram" ></i></a>
		      <a href="#"><i className="fa fa-twitter"></i></a>
	        </div>
          <div className="content">
            <h2>OHM FOOD MASALA</h2>
            <h2>Quality of taste</h2>
            <h4>Tamilnadu Salem +91 9600337763</h4>
	          <h4>For wholesale and taking dealsership</h4>
            <button type="button" className="btn btn-warning btn-lg"><a href="#">Contact Us</a></button>
        </div>
        <div className="content_img">
	          <img src={require ("./spices2.png")}/>
            </div>
        </div><br /> <br />
        <div className="last_box">
	       <div className="right_img">
	      <img src={require ("./masala.png")} className="right"/>
	 </div>
	 <div className="left_content">
	 <h2>About Us</h2>
    <h4>{this.state.about.content}</h4> 
	 </div>
	</div><br/><br/><br/>
  <div className="container " >
	<div className="row"><br/>
            
            
			<div>
				<div className="col-md-3">
				
                
				</div>
                <div className="col-md-6 recipe" >
	            <h3>{this.state.blog.name}</h3 >
                <h4>{this.state.blog.content}</h4>
	            </div>
                
			</div>
					
	</div>
  </div>
  <br/>
  <div className="container" id="contact_container">
  <h3 className="text-center">Contact US</h3>
  <p className="text-center"><em>We love our customer!</em></p>

  <div className="row">
    <div className="col-md-4">
      <h4>Any dout? Drop a note.</h4>
      <h4><span className="glyphicon glyphicon-map-marker"></span>Salem, Tamil nadu</h4>
      <h4><span className="glyphicon glyphicon-phone"></span>Phone: +91 9600337763</h4>
      <h4><span className="glyphicon glyphicon-envelope"></span>Email: sachinvijay@gmail.com</h4>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <br/>
      <div className="row">
        <div className="col-md-12 form-group">
          <button className="btn pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    );
  }
  }
  
export default Home;