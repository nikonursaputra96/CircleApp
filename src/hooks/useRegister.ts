import { useState } from "react"
import { IRegister } from "../interfaces/Card"
import { useNavigate } from "react-router-dom"
import { APIConfig } from "../lib/api"

const useRegister = () => {
    const navigate = useNavigate()

    const [register, setRegister] = useState<IRegister>({
        fullname: '',
        email: '',
        password: '',
        username: ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) : void => {
        setRegister ({
            ...register,
            [e.target.name]:e.target.value
        })
    }

    const handlePost = async () :Promise<void> => {
        try {
            const response = await APIConfig.post('/auth/register', register)
            console.log(response)
            navigate('/auth/login')
        } catch (error) {

        }
    }
    return {
        handleChange,
        register,
        handlePost
    }
}

export default useRegister