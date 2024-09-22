import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelDeleteUser(props) {
  const {show, setShow,dataDeleteUser} = props
  const handleClose = () => setShow(false);

  const hanldeSumitDeleteUser = ()=>{
    alert("me")
  }
  
  return (
    <>

      <Modal show={show} onHide={handleClose}  backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete?<br/> 
        
        <b>{dataDeleteUser ? dataDeleteUser.email : ""}</b></Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>hanldeSumitDeleteUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelDeleteUser;
