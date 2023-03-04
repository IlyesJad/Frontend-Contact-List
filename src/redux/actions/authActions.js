import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, USER_LOADING } from "./actionTypes/actionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';


//loading user
export const userLoading = () => (dispatch) =>{
    dispatch({type:USER_LOADING})
}
const toastOptions={
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    };
//register user
export const registerUser = (FormData) => async (dispatch)=>{
    dispatch(userLoading())
    try {
    const res = await axios.post("/api/auth/register",FormData)
    if(res){
        toast.info(res.data.msg, toastOptions)
        console.log('Rejister res;',res)
        dispatch({
            type:REGISTER_USER,
            payload : res.data
        })
    }
    } catch (error) {
        console.dir(error)
    const {errors,msg} = error.response.data
    toast.error(error.response.data.msg, toastOptions)
    errors.forEach((err)=> toast.error(err.msg,toastOptions))

    }
}

//login
export const loginUser=(formData)=>async (dispatch)=>{
    dispatch(userLoading())
    try {
    const res = await axios.post("/api/auth/login",formData)
    console.log("login res", res)
    if(res){
        toast.info(res.data.msg, toastOptions)
    }
    dispatch({
        type:LOGIN_USER,
        payload : res.data
    })
    } catch (error) {
        console.dir(error)
        const {errors,msg} = error.response.data
        toast.error(error.response.data.msg, toastOptions)
        errors.forEach((err)=> toast.error(err.msg,toastOptions))
        
    }
}

//logout
export const logoutUser = ()=> (dispatch)=> {
dispatch({type:LOGOUT_USER})
}