import { GET_CONTACT, GET_CONTACT_LOAD,GET_CONTACT_FAIL,GET_CONTACT_SUCCESS } from "../actions/actionTypes/actionTypes";

const initialState = {
    contacts :[],
    user :{},
    loadContact: false,
    errors : []

}

export const contactReducer = (state= initialState, {type,payload}) =>{
    switch (type) {
        case GET_CONTACT_LOAD : 
        return {...state, loadContact : true}
        case GET_CONTACT_SUCCESS :
            return {...state, loadContact:false, contacts :payload}
        case GET_CONTACT_FAIL :
            return {...state, loadContact:false, errors:payload}
        case GET_CONTACT :
            return {...state,user : payload}   
        default : 
        return state 
    }
}