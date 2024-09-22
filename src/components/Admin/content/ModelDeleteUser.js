import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteApiUser } from '../../../service/ApiCreateNewUser';
import { toast } from 'react-toastify';


function ModelDeleteUser(props) {
  const {show, setShow,dataDeleteUser} = props
  const handleClose = () => setShow(false);

  const hanldeSumitDeleteUser = async()=>{



    const data = await deleteApiUser(dataDeleteUser.id)

      if(data && data.EC === 0){
          toast.success(data.EM)
          handleClose()
          await props.fetchData()
        }
        if(data && data.EC !== 0){
          toast.error(data.EM)

        }

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
