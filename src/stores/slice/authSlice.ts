import { createSlice } from "@reduxjs/toolkit";
import { IAuth} from "../../interfaces/Card";
import { setAuthToken } from "../../lib/api";

const initialAuthState: IAuth = {
    id: 0,
    email: '',
    username: '',
    fullname: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN : (_, action) => {
           const {data, token} = action.payload
           localStorage.setItem('token', token)
           
           setAuthToken(token)
           const user = {
            id : data.id,
            email : data.email,
            fullname : data.fullname,
            username: data.username
           }

           return user
        },
        AUTH_CHECK : (_, action) => {
            const {id, fullname, username, email,} = action.payload

            const user = {
                id : id,
                email : email,
                fullname : fullname,
                username: username
               }

            return user
        },
        LOGOUT : () => {
            localStorage.removeItem('token')
        },
        AUTH_ERROR : () => {
            localStorage.removeItem('token')
        }
    }
}) 