import ModelCreateUser from "./ModelCreateUser"
import './ManagaUser.scss'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getApiPageUser, getApiUserAll } from "../../../service/ApiCreateNewUser"
import ModelUpdateUser from "./ModelUpdateUser"
import ModelDeleteUser from "./ModelDeleteUser"
import TableReactPaginate from "./TableReactPaginate"

const ManageUser =(props)=>{
    const LIMIT_USERS = 1;
    const [showModelUser,SetShowModelUser] = useState(false);
    const [currentPage,setCurrentPage] = useState(1)
    const [showUpdateUser,SetShowUpdateUser] = useState(false)
    const [showDeleteUser,setDeleteUser] = useState(false)
    const [listUser,setListUser] = useState([]);
    const [dataUpdate,setDataUpdate] = useState({})
    const [dataDeleteUser,setDataDelete] = useState({});
    const [countPage,setCountPage]= useState(0)
    useEffect(()=>{
    //    fecthData();
        fecthDataByPage(1)
        
    },[])

    const fecthData=async()=>{
       let res = await getApiUserAll();
        console.log(res);
        
        if(res.EC === 0){
            setListUser(res.DT)
        }


    }
    
    const fecthDataByPage=async(page)=>{
       let res = await getApiPageUser(page,LIMIT_USERS);
        console.log(res);
        
        if(res.EC === 0){
            console.log('fecth page',res.DT);
            
            setListUser(res.DT.users)
            setCountPage(res.DT.totalPages)
        }


    }
    
    const handleUpdateUser = (user)=>{
        SetShowUpdateUser(true)
        setDataUpdate(user)
    }

    const handelDeleteUser =(user)=>{
        setDeleteUser(true)
        setDataDelete(user)

    }


    const handleCreateUser =()=>{
        SetShowModelUser(true)
    }

    const resetUpdateData=()=>{
        setDataUpdate({})
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
                    <TableReactPaginate 
                    handelDeleteUser={handelDeleteUser}
                    handleUpdateUser={handleUpdateUser}
                    listUser={listUser}
                    fecthDataByPage={fecthDataByPage}
                    countPage={countPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
                </div>

                <ModelCreateUser
                    show={showModelUser}
                    setShow={SetShowModelUser}
                    fetchData={fecthData}
                    fecthDataByPage={fecthDataByPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModelUpdateUser 
                    show={showUpdateUser}
                    setShow={SetShowUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchData={fecthData}
                    resetUpdateData={resetUpdateData}
                    fecthDataByPage={fecthDataByPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModelDeleteUser
                    show={showDeleteUser}
                    setShow={setDeleteUser}
                    dataDeleteUser={dataDeleteUser}
                    fetchData={fecthData}
                    fecthDataByPage={fecthDataByPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </>
    )
}
export default ManageUser