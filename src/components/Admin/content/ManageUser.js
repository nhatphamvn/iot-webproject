import ModelCreateUser from "./ModelCreateUser"
import './ManagaUser.scss'
import { useState } from "react"
import TableUser from "./TableUser"


const ManageUser =(props)=>{

    const [showModelUser,SetShowModelUser] = useState(false);


    const handleCreateUser =()=>{
        SetShowModelUser(true)
    }
    return(
        <>
            <div className="manage-user-container">
                <div className="title">
                    <h2>Quản Lí User</h2>

                </div>
                <div className="btn-button">
                    <button className="btn btn-primary" onClick={()=> handleCreateUser()}>Add New User</button>

                </div>
                <div className="">
                    <TableUser />
                </div>

                <ModelCreateUser
                    show={showModelUser}
                    setShow={SetShowModelUser}
                />
            </div>

        </>
    )
}
export default ManageUser