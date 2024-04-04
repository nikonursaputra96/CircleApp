import { ChangeEvent, useState } from "react"
import {APIConfig} from "../lib/api"
import { ITestData, IUserData } from "../interfaces/Card"
import { useSelector } from "react-redux"
import { RootState } from "../stores/types/rootState"
import { useMutation, useQuery } from "@tanstack/react-query"


const useThreads = () => {
    const {id} = useSelector((state: RootState) => state.auth)
    
    const {data: getThreads, isLoading, isError, refetch} = useQuery({
        queryKey: ['THREADS'],
        queryFn: async () => {
            try {
                const response = await APIConfig.get("/threads")
                return response.data
            } catch (error) {
                throw error
            }
        }
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
    
    
    
    const [form, setForm] = useState<ITestData>({
        content: '',
        userId: id,
        image: null
    })



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; 
        
        if (file) {
            setForm({
                ...form, 
               image : file})
        }

    };
      
    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
            
        })
    }
    
    const {mutateAsync} =   useMutation<unknown, unknown, FormData>({
        mutationFn: async (dto) => {
         
            await APIConfig.post("/threads", dto)
        },
        onSuccess: () => refetch()
    })

    const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('content', form.content)
        formData.append('image', form?.image as string)
        formData.append('userId', String(form?.userId))

      
        mutateAsync(formData)
    }

  

    return {
        getThreads, 
        isLoading, 
        isError, 
        handleChange,
        handlePost,
        handleImageChange,
        getUser,
        user,


   
    }
}

export default useThreads


// .............................................................//
// import { ChangeEvent, useState } from "react"
// import {APIConfig} from "../lib/api"
// import { ITestData, IThread, IUserData } from "../interfaces/Card"
// import { useSelector } from "react-redux"
// import { RootState } from "../stores/types/rootState"


// const useThreads = () => {
//     const {id} = useSelector((state: RootState) => state.auth)
//     const[threads, setThreads] = useState<IThread[]>([])

//     const [form, setForm] = useState<ITestData>({
//         content: '',
//         userId: id,
//         image: ''
//     })


//     const [user, setUser] = useState<IUserData[]>([])
//     const getUser = async () :Promise<void> => {
//         try {

//             const userResponse = await APIConfig.get("/user")
//             const user = userResponse.data
    
//             setUser(user)
//         } catch (error) {
//             throw error
//         }
//     }



//     const getThreadsAndUser = async () :Promise<void> => {
//         try {
//             const threadsResponse = await APIConfig.get("/threads")
//             const threads = threadsResponse.data
            
//               setThreads(threads)
          
//         } catch (error) {
//             throw error
//         }
//     }


//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0]; 
        
//         if (file) {
//             setForm({...form, image : file})
//         }
        
//     };
      
//     const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
//         setForm({
//             ...form,
//             [e.target.name]:e.target.value,
            
//         })
//     }
    
//     const handlePost = async () :Promise<void>  => {
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 }
//             }
//             await APIConfig.post("/threads", form, config)

         
//              await getThreadsAndUser()

//             console.log('Post success', form)
//         } catch (error) {
//             throw error
//         }
//     }
//     return {
//         getThreadsAndUser,
//         threads,
//         handleChange,
//         handlePost,
//         handleImageChange,
//         getUser,
//         user,
//         form

   
//     }
// }

// export default useThreads