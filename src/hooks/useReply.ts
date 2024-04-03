import { ChangeEvent, useEffect, useState } from "react"
import { IReply, ITestReply } from "../interfaces/Card"
import { APIConfig } from "../lib/api"
import { useSelector } from "react-redux"
import { RootState } from "../stores/types/rootState"


const useReply = (threadId: number) => {
    const { id } = useSelector((state: RootState) => state.auth)


    const [reply, setReply] = useState<IReply[]>([])

    const [form, setForm] = useState<ITestReply>({
        content: '',
        image: null,
        userId: id,
        threadsId: Number(threadId)
    })

    useEffect(() => {
        setForm((form) => ({
            ...form,
            userId: id,
        }));
    }, [id]);



    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })
    }




    const getReply = async (threadId: number, limit: number = 25): Promise<void> => {
        try {
            const replyResponse = await APIConfig.get(`/threads/${threadId}/replies?limit=${limit}`)
            const reply = replyResponse.data

            setReply(reply)

        } catch (error) {
            throw error
        }
    }

    const handlePost = async (): Promise<void> => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            await APIConfig.post("/replies", form, config)


            await getReply(Number(threadId))

            console.log('Post success', form)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        getReply,
        reply,
        handlePost,
        handleChange
    }
}

export default useReply