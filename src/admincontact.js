import React, {Component} from 'react';
import axios from 'axios';

class admincontact extends Component{
    constructor(){
        super();
        this.state = {
            person: [],
            store: [],
            email: "",
            phone: "",
            mapl: "",
            city: "",
            states: "",
        };
        this.logout = this.logout.bind(this);
        this.delete = this.delete.bind(this);
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
          alert("alert");
        event.preventDefault();
        this.setState({
          email: event.target.value,
          mapl: event.target.value,
          state: event.target.value,
          city: event.target.value,
          phone: event.target.value
          
        });
        this.state.store.push(this.state.email, this.state.city, this.state.mapl, this.state.phone, this.state.states);
        const updatedpost= {
            email: this.state.email,
            mapl: this.state.mapl,
            state: this.state.states, 
            city: this.state.city,
            phone: this.state.phone
        }
        
        console.log(this.state.email);
      const resp = axios.put('http://localhost:4000/info/update/5f45497b9120014680289a99', updatedpost)
      
                
    
             
              }
    componentDidMount() {
        axios.get('http://localhost:4000/info').then(res =>{
            console.log(res.data)
            const person = res.data;
            this.setState({person});
        })
    }
    
    logout(){
        
        localStorage.clear();
        window.location.href = '/adminlogin';
    }
    delete(personid){
        console.log(personid)
        axios.delete(`http://localhost:4000/info/${personid._id}`).then(res => {
            console.log(res)
            this.componentDidMount();
            

        })
    }
    

render(){
    return(
        
        <div className="container form-group">
            <br/><br/>
            <div className="row">
                <div className="col-md-8">
                    <input className="form-control" onChange={this.handelchange} name="mapl" value={this.state.mapl} type="text" placeholder="Map url"/>    
                    <input className="form-control" onChange={this.handelchange} name="city" value={this.state.city} type="text" placeholder="city"/>
                    <input className="form-control" onChange={this.handelchange} name="states" value={this.state.states} type="text" placeholder="State"/>
                    <input className="form-control" onChange={this.handelchange} name="phone" value={this.state.phone} type="text" placeholder="Phone no"/>
                    <input className="form-control" onChange={this.handelchange} name="email" value={this.state.email} type="email" placeholder="Email id"/>
                    <button type="submit" className="btn btn-sucess" onClick={this.submit}>Submit</button>



                </div>
            </div>
            <div className="container">
            <h3>Contact List</h3>
            <table className="table">
                <tr><th>Email</th>
                <th>Name</th>
                <th>Comments</th>
                <th>Delete</th></tr>
                {this.state.person.map(persons => 
                <tbody><td>{persons.email}</td> <td>{persons.name}</td> <td>{persons.comments}</td>
                <td><button className="btn btn-danger" onClick={() => this.delete(persons)}>Delete</button></td></tbody>)}
                

            </table>
        </div>
        </div>
    )
}
}
export default  admincontact;