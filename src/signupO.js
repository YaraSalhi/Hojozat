import React from "react";
import "./signup.css";
import $ from 'jquery';
import {Redirect} from 'react-router-dom'


class Signup extends React.Component {
    constructor(props) {
        super(props);
         this.state = {status:{},
         redirect: false
        };
         this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        console.log(e.target.value);
        console.log(e.target.id);
        var value = e.target.value;
        var name = e.target.id
        this.state.status[name]=value
        //console.log(this.state.status)
         this.setState({status:this.state.status});
    }
   

    saveData(event) {
        console.log(this.state.status)
        event.preventDefault();
         console.log("heloooo from save");
       
      var that = this;
  
        $.ajax({
          url: "http://localhost:8000/signupO",
          type: "POST",
          data: that.state.status,
          datatype: "json",
          success: function(data) {
            console.log(data);
            window.location.href = "/loginO";
            alert("welcome to Houjzat!")
            console.log("hi from success!!")
          },
          error:function(err){
            alert("already exist!")
            console.log("user already exist!")
          }
        }); 
      }
  

    render(){
      const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/loginO' />
    }
        return(
            <div>          
          <form className="ui form" onSubmit={this.saveData.bind(this)}>

            <div className="field">
                <input id="Email" className="inp" placeholder="Email" onChange={this.handleChange} />
            </div>
            <div className="field">
                <input id="password" className="inp" placeholder="password" onChange={ this.handleChange} />
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" className="inp" className="hidden" readOnly="" tabIndex="0" />
                <label id="inp">I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button type="Submit"  id="inp" className="ui button">SignUp</button>
            </form>
        </div>  
        )
    }
}

export default Signup;