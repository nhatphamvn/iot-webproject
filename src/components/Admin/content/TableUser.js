

const TableUser = (props)=>{

    const {listUser} = props



    return(

    <>

        <table className="table table-bordered border-primary">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {listUser && listUser.length >0 &&
                
                listUser.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td >{index+1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className="btn border-info">View</button>
                                <button className="btn border-warning mx-3">Update</button>
                                <button className="btn border-danger">Delete</button>
                            </td>      
                        </tr>
                    )

                })
                }

                {listUser && listUser.length===0 && 
                    <tr >
                        <td colSpan="4">Data Not Found</td>
                    </tr>

                }
             
            </tbody>
        </table>
    </>

    )


}

export default TableUser