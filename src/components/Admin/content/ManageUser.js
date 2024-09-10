import ModelCreateUser from "./ModelCreateUser"


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
                    <ModelCreateUser/>
                </div>

            </div>

        </>
    )
}
export default ManageUser