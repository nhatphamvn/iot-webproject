
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
export {
    ApiCreateNewUser,getApiUserAll,ApiPutNewUser
}
