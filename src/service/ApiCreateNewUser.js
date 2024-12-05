
import axios from "../untils/urlApi";


const ApiCreateNewUser = (email,password,username,role,image)=>{
    
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);

        return axios.post('api/v1/participant', data)

}

const ApiPutNewUser = (id,username,role,image)=>{
    
        const data = new FormData();
    
        data.append('id',id);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);
        return axios.put('api/v1/participant', data)

}


const getApiUserAll =()=>{
        return axios.get('api/v1/participant/all')

}
const getApiPageUser =(page,limit)=>{
        return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)

}

const deleteApiUser =(userId)=>{
        return axios.delete('api/v1/participant', {data: {id : userId}})

}

const postLogin =(userEmail,userPassword)=>{
        return axios.post('api/v1/login', {email:userEmail,password:userPassword})
}
const createSignUp =(username,email,password)=>{
        return axios.post('api/v1/register',{username,email,password})
}

//shortcut
// const postLogin =(email,password)=>{
//         return axios.post('api/v1/login', {email,password})
// }
export {
    ApiCreateNewUser,getApiUserAll,ApiPutNewUser,deleteApiUser,getApiPageUser,postLogin,createSignUp
}
