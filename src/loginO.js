import React from "react";
import "./signup.css"
import $ from 'jquery';
import {Redirect} from 'react-router-dom'



class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        email: '',
        password: ''
      }
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangepassword = this.handleChangepassword.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
      
 
    handleChangeEmail (event) {
      this.setState({email: event.target.value})
      console.log(this.state.Email)
    }
  
    handleChangepassword (event) {
      this.setState({password: event.target.value})
      console.log(this.state.password)
    }

    handleSubmit(event) {
        event.preventDefault();
      
       var that = this;
       $.ajax({
         url: "http://localhost:8000/loginO",
         type: "POST",
         data:{
          email: that.state.email,
          password: that.state.password
        },
         datatype: "json",
         success: (data) => {
           console.log(data)
          //  localStorage.setItem("usertoken", data.token);
          //  const decoded = jwt_decode(data.token);
          //  that.setState({
          //   Email: decoded.password
          //  });
          if (data) {
            console.log('correct signin')
            window.location.href = '/navO'
          } else {
            this.setState({mssg: 'Invalid Email or password'})
            alert('user name or password is not correct!!')
          }
        },
        error: (err) => {
          console.log('err', err)
          alert('user name is not existe !!')
        }
      })
    }

     render() {
        const { redirect } = this.state
        if (redirect) {
          return <Redirect to='/navO' />
        }
        return(
          <div>
             <form className="ui form">
               <div className="field">
                   <input id="Email" id="inp" placeholder="Email" onChange={this.handleChangeEmail} />
               </div>
               <div className="field">
                   <input id="password" id="inp" placeholder="password" onChange={this.handleChangepassword} />
               </div>
               <div className="field">
                   <div className="ui checkbox">
                   <input type="checkbox"  id="inp" className="hidden" readOnly="" tabIndex="0" />
                   <label id="inp">remember me</label>
                   </div>
               </div>
               <button type="submit" id="inp"  onClick={this.handleSubmit} className="ui button">login</button>
               </form>
           </div> 
        )
      }
    }
  export default Login;