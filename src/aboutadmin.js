import React, {Component} from 'react';
import axios from 'axios';

class aboutadmin extends Component{
constructor(){
    super();
    this.state = {
        content: " ",
    }

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
          content: event.target.value,
      })
      axios.post('http://localhost:4000/info/about', this.state.content).then(res => {
          console.log(res);
      })

      

  }

render(){
    return(
        <div class="container">
            <center><h3>Admin About US </h3></center>
            <textarea rows="10" cols="80" name="content" value={this.state.content} onChange={this.handlechange}>
            </textarea>
            <button type="submit" className="btn btn-sucess" onClick={this.submit}>Submit</button>
        </div>
    );
}
    
}
export default aboutadmin;