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
    const [username,setUsername] = useState('');
    const [age , setAge] = useState(0);


    

       const handleOnsubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Math.floor(Math.random() * 100) + "-random",
            name: username,
            age: age
        };
        props.handleAddUsers(newUser);  // Truyền object newUser lên cha
        };
        const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'age') {
            setAge(value);
        }
        };
    console.log(hideShow);
    
    const handleHideShow=()=>{
  
        setHideShow(!hideShow)
    }
    
        const {User} = props;
        

        
        return(
            <div className="formUser-infor">

                <img src={logo}/>
                <form onSubmit={()=>handleOnsubmit()}>

                <h2> List Users: </h2>
                <label>Username :</label>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={handleOnChange}

                /> 
                <label> AGE :</label>
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={age}
                    onChange={handleOnChange}
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