import ModelCreateUser from "./ModelCreateUser"
import './ManagaUser.scss'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getApiUserAll } from "../../../service/ApiCreateNewUser"

const ManageUser =(props)=>{

    const [showModelUser,SetShowModelUser] = useState(false);

    const [listUser,setListUser] = useState([]);

    useEffect(()=>{
       fecthData();
        
    },[])

    const fecthData=async()=>{
       let res = await getApiUserAll();
        console.log(res);
        
        if(res.EC === 0){
            setListUser(res.DT)
        }


    }
    
    


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
                    <TableUser listUser={listUser}/>
                </div>

                <ModelCreateUser
                    show={showModelUser}
                    setShow={SetShowModelUser}
                    fetchData={fecthData}
                />
            </div>

        </>
    )
}
export default ManageUser