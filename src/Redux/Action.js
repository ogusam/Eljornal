import { MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST } from "./ActionType";
import axios from "axios";
export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}

export const FetchUserList=()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:8000/users").then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}