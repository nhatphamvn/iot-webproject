import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";

const ModelCreateUser=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const [role,setRole] = useState("USER")
  const [image,SetImage] = useState("")
  const [previewImage,SetPreImage] =useState("")

  const handleUploadFile=(e)=>{
    if(e.target && e.target.files && e.target.files[0]){

      SetPreImage(URL.createObjectURL(e.target.files[0]))
      SetImage(e.target.files[0])
    }else{
      // SetImage("")
    }
    console.log("load",e.target.files[0])
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add New Users
      </Button>

      <Modal show={show} onHide={handleClose} size='x' backdrop="static" className='model-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" 
                    className="form-control"
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
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelCreateUser