import React, { Component } from "react";

class FormUser extends Component{

    constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      age: '',
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
        this.props.handleAddUsers({
            id: Math.floor(Math.random() * 100) +"ramdom",
            name:this.state.username,
            age:this.state.age
        })
        
    }
    handleShowHide=()=>{
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    

    render(){
       
        
        const {User} = this.props;
        

        
        return(
            <>
                <form onSubmit={(e)=>this.handleOnsubmit(e)}>
              
                <h2> List Users: </h2>
                <label>Username :</label>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleOnChange}

                /> 
                <label> AGE :</label>
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleOnChange}
                />

                <button >Submit</button>

                <hr/>

                {
                    this.state.isLogin && <div>
                    {User.map((user)=>(
                    <li key={user.id}>
                        {user.name} {user.age}
                    </li>
                ))}
                    </div>
                }
                
                <button onClick={()=>this.handleShowHide()}>
                    Hide
                </button>
                



                
                </form>
            
            
            
            </>

        )

    }


}
export default FormUser