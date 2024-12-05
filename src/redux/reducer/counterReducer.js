
import { HANDLE_LOGIN_SUCCESS } from '../action/accountAction';
import { INCREMENT, DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
    account:{
        access_token:'',
        email:'',
        image:'',
        refresh_token:'',
        role:'',
        username:'',
    },
    isAuthenticated:false

};


const authReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    
    switch (action.type) {
        case HANDLE_LOGIN_SUCCESS:
            return {
                ...state,
                account:{
                    access_token: action.payload?.DT?.access_token,
                    email:action.payload?.DT?.email,
                    image:action.payload?.DT?.image,
                    refresh_token:action.payload?.DT?.refresh_token,
                    role:action.payload?.DT?.role,
                    username:action.payload?.DT?.username,        
                },
                isAuthenticated:true
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default authReducer;