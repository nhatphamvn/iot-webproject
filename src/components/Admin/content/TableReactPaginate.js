import { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.




const TableReactPaginate = (props)=>{

    const {listUser, handleUpdateUser,handelDeleteUser,countPage} = props

    const handlePageClick = async(event) => {
        await props.fecthDataByPage(+event.selected +1 )
        props.setCurrentPage(+event.selected +1)
        console.log(`User requested page number ${event.selected}`)
    };


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
                                <button className="btn border-warning mx-3" 
                                onClick={()=>handleUpdateUser(item)}>Update</button>
                                <button className="btn border-danger" 
                                
                                onClick={()=>handelDeleteUser(item)}>Delete</button>
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
        <div className='page-paginate d-flex justify-content-center'>
        <ReactPaginate
            nextLabel="Sau "
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={countPage}
            previousLabel="Trước "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={props.currentPage -1}
        />
        </div>
 
    </>

    )


}

export default TableReactPaginate