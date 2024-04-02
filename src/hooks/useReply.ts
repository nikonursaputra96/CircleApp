import { useState } from "react"
import { IReply } from "../interfaces/Card"
import APIConfig from "../lib/api"

const useReply =  () => {

    const [reply, setReply] = useState<IReply[]>([])
    // const [form, setForm] = useState<ITestReply>({
    //   content: '',
    //   image: '',
    //   userId: 0,
    //   threadsId: 0
    // })


    const getReply = async (threadId:number, limit: number = 25) :Promise<void> => {
        try {
            const replyResponse = await APIConfig.get(`/threads/${threadId}/replies?limit=${limit}`)
            const reply = replyResponse.data
       
              setReply(reply)
          
        } catch (error) {
            throw error
        }
    }

    return {
        getReply,
        reply
    }
}

export default useReply