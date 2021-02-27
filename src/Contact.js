import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component{
  constructor(){
    super();
    this.state = {
        email: "",
        name: "",
        comments: "",
        store:[],
        blogid: [],
        blog: []
    };
    this.handelchange= this.handelchange.bind(this);
    this.submit= this.submit.bind(this);
  }
  
  handelchange(event){
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  
  submit(event){
    event.preventDefault();
    this.setState({
      email: event.target.value,
      name: event.target.value,
      comments: event.target.value
    });
    this.state.store.push(this.state.email, this.state.contact, this.state.details);
    
    console.log(this.state.store);
  axios.post('http://localhost:4000/info', {email: this.state.email,
  name: this.state.name,
  comments: this.state.comments}).then(res =>{
    console.log(res)
  })
            

        this.setState({email: '',name: '', comments:'' })
          } 
          componentDidMount() {
            axios.get('http://localhost:4000/info/admincontact').then(res =>{
            
              this.setState({blogid: res.data});
              this.state.blog.push(this.state.blogid[1].mapl,this.state.blogid[1].city,this.state.blogid[1].state,
                this.state.blogid[1].phone,this.state.blogid[1].email)
              console.log(this.state.blog[1]);
            })
            
        }
render(){
    return(
        <div>
           
  <div id="map-container-google-1" class="z-depth-1-half map-container">
  <iframe src={this.state.blog[0]} frameborder="0"
     allowfullscreen  style={{ height: '50vh', width: '100%' }} target="_parent" ></iframe>
</div>
<div className="container" id="contact_container">
  <h3 className="text-center">Contact US</h3>
  <p className="text-center"><em>We love our customer!</em></p>

  <div className="row">
    <div className="col-md-4">
      <h4>Any dout? Drop a note.</h4>
    <h4><span className="glyphicon glyphicon-map-marker"></span>{this.state.blog[1]} {this.state.blog[2]}</h4>
    <h4><span className="glyphicon glyphicon-phone"></span>Phone:  {this.state.blog[3]}</h4>
    <h4><span className="glyphicon glyphicon-envelope"></span>Email: {this.state.blog[4]}</h4>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" value={this.state.name} onChange={this.handelchange} placeholder="Name" type="text" required />
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" value={this.state.email} onChange={this.handelchange} placeholder="Email" type="email" required />
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" value={this.state.comments} onChange={this.handelchange} placeholder="Comment" rows="5"></textarea>
      <br/>
      <div className="row">
        <div className="col-md-12 form-group">
          <button className="btn pull-right" type="submit" onClick={this.submit}>Send</button>
        </div>
      </div>
    </div>
    </div>
    </div>
        </div>
    )
}
}

export default Contact;