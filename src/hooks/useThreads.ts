import { ChangeEvent, useState } from "react"
import {APIConfig} from "../lib/api"
import { ITestData, IThread, IUserData } from "../interfaces/Card"

const useThreads = () => {

    const[threads, setThreads] = useState<IThread[]>([])

    const [form, setForm] = useState<ITestData>({
        content: '',
        userId: 10,
        image: ''
    })


    const [user, setUser] = useState<IUserData[]>([])
    const getUser = async () :Promise<void> => {
        try {

            const userResponse = await APIConfig.get("/user")
            const user = userResponse.data
    
            setUser(user)
        } catch (error) {
            throw error
        }
    }



    const getThreadsAndUser = async () :Promise<void> => {
        try {
            const threadsResponse = await APIConfig.get("/threads")
            const threads = threadsResponse.data
            
              setThreads(threads)
          
        } catch (error) {
            throw error
        }
    }


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; 
        
        if (file) {
            setForm({...form, image : file})
        }
        
    };
      
    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
            
        })
    }
    
    const handlePost = async () :Promise<void>  => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
            await APIConfig.post("/threads", form, config)

         
             await getThreadsAndUser()

            console.log('Post success')
        } catch (error) {
            throw error
        }
    }
    return {
        getThreadsAndUser,
        threads,
        handleChange,
        handlePost,
        handleImageChange,
        getUser,
        user,
        form

   
    }
}

export default useThreads