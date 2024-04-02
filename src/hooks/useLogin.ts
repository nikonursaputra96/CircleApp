import { useState } from "react"
import { ILogin } from "../interfaces/Card"
import {APIConfig} from "../lib/api"
import { useNavigate } from "react-router-dom"
import { AUTH_LOGIN } from "../stores/rootReducer"
import {useDispatch } from "react-redux"
const useLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState<ILogin> ({
        email: '',
        password: '',
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) : void => {
        setLogin ({
            ...login,
            [e.target.name]:e.target.value
        })
    }

    const handlePost = async () :Promise<void> => {
        try {
            await APIConfig.post('/auth/login', login)

           const response = await APIConfig.post('/auth/login', login)
           dispatch(AUTH_LOGIN(response.data))

           navigate('/')
        } catch (error) {
            throw error
        }
    }
    return {
        handleChange,
        login,
        handlePost
    }
}

export default useLogin