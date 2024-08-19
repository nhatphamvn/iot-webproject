import React, { Component } from "react";

class FormUser extends Component{

    constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isLogin: true // true: login form, false: signup form
    };
  }
   handleOnChange=(e)=>{
    const {name, value} = e.target
    this.setState({
        [name]: value
    })

    
    }

    handleOnsubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        
    }

    render(){
        return(
            <>
                <form onSubmit={(e)=>this.handleOnsubmit(e)}>
            
                <h2>login {this.state.username}</h2>
                <label>Username :</label>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleOnChange}

                /><br/>
                <label>Password :</label>
                <input
                    name='password'
                    type='text'
                    placeholder='Username'
                    value={this.state.password}
                    onChange={this.handleOnChange}
                />

                <button >Submit</button>
                
                



                
                </form>
            
            
            
            </>

        )

    }


}
export default FormUser