import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import _ from 'lodash';

import {ApiCreateNewUser}  from '../../../service/ApiCreateNewUser'; 

const ModelUpdateUser=(props)=> {

  const { show ,setShow,dataUpdate} =props



  const handleClose = () => {
    setEmail("")
    setPassword("")
    setUsername("")
    SetImage("")
    setRole("USER")
    SetPreImage("")
    setShow(false)
  
  
  };


  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const [role,setRole] = useState("USER")
  const [image,SetImage] = useState("")
  const [previewImage,SetPreImage] =useState("")

  useEffect(()=>{
    if(!_.isEmpty(dataUpdate)){
        setEmail(dataUpdate.email)
        setUsername(dataUpdate.username)
        SetImage("")
        setRole(dataUpdate.role)
        if(dataUpdate.image){
            SetPreImage(`data:image/jpeg;base64,${dataUpdate.image}`)
        }
    }
    
  },[dataUpdate])

  const handleUploadFile=(e)=>{
    if(e.target && e.target.files && e.target.files[0]){

      SetPreImage(URL.createObjectURL(e.target.files[0]))
      SetImage(e.target.files[0])
    }else{
      // SetImage("")
    }

  }


  const handleSaveUser =async()=>{

    const validateEmail = (email) => {
      return String(email)
      .toLowerCase()
      .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    };

    const isValidateEmail = validateEmail(email)

    if(!isValidateEmail){
      toast.error("validated Email")
      return;
    }
    if(!password){
      toast.error("failed password")
    }


 

        const data = await ApiCreateNewUser(email,password,username,role,image)


        if(data && data.EC === 0){
          toast.success(data.EM)
          handleClose()
        //   await props.fetchData()
        }
        if(data && data.EC !== 0){
          toast.error(data.EM)

        }



    
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
       Add New Users
      </Button> */}

      <Modal show={show} onHide={handleClose} size='x' backdrop="static" className='model-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input type="text"
                    className="form-control"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
                   <div className="col-md-6">
                    <label className="form-label">Role</label>
                  <select className="form-select"
                    onChange={(e)=> setRole(e.target.value)}                    
                    >
                    <option selected value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email"
                    className="form-control"
                    disabled
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" 
                    className="form-control"
                    disabled
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
             
                 <div className="col-md-12">
                    <label className="form-label label-upload" htmlFor='lable-image'>
                     <FaPlusCircle /> Upload Image
                      </label>
                    <input type="file" id='lable-image' hidden 
                    onChange={(e)=> handleUploadFile(e) }
                    />
                </div>
                 <div className="col-md-12 img-preview">
                    {/* <span>Upload Image</span> */}
                    { 
                      previewImage ?
                      <img src={previewImage}/>
                      : <span>Upload Image</span>
                    }
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelUpdateUser