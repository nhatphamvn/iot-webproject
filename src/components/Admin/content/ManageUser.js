import ModelCreateUser from "./ModelCreateUser"
import './ManagaUser.scss'

const ManageUser =(props)=>{
    return(
        <>
            <div className="manage-user-container">
                <div className="title">
                    <h2>Quản Lí User</h2>

                </div>
                <div>
                    <button>Add New User</button>

                </div>
                <div>
                    table User
                </div>

                <ModelCreateUser/>
            </div>

        </>
    )
}
export default ManageUser