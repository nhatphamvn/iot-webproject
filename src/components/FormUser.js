import React, {  useState } from "react";
import './FormUser.scss'
import logo from './../logo.svg'
// class FormUser extends Component{

//     constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       age: '',
//       isLogin: true // true: login form, false: signup form
//     };
//   }
//    handleOnChange=(e)=>{
//     const {name, value} = e.target
//     this.setState({
//         [name]: value
//     })

    
//     }

//     handleShowHide=()=>{
    //         this.setState({
        //             isLogin: !this.state.isLogin
        //         })
        //     }
const FormUser =(props)=>{

    const [hideShow,setHideShow] = useState(true);
            // handleOnsubmit=(e)=>{
            //     e.preventDefault();
            //     this.props.handleAddUsers({
            //         id: Math.floor(Math.random() * 100) +"-ramdom",
            //         name:username,
            //         age:age
            //     })
                
            // }
            //    handleOnChange=(e)=>{
            // const {name, value} = e.target
            // this.setState({
            //     [name]: value
            // })
    console.log(hideShow);
    
    const handleHideShow=()=>{
  
        setHideShow(!hideShow)
    }
    
        const {User} = props;
        

        
        return(
            <div className="formUser-infor">

                <img src={logo}/>
                <form >

                <h2> List Users: </h2>
                <label>Username :</label>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
             
               

                /> 
                <label> AGE :</label>
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
              
                />

                <button >Submit</button>

                <hr/>
         
                <span onClick={()=>handleHideShow()}>Hide</span>
                {
                    hideShow && <div>
                    {User.map((user)=>(
                    <li key={user.id}>
                        {user.name} {user.age}
                       
                    </li>
                    
                    ))}
                    </div>
                }

                </form>

            </div>

        )
    }
//     }


// // }
export default FormUser