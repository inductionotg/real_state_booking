import { useRef,useState,useEffect } from "react"
import axios from "axios"
import api from "@/api"
function useFetch(url,options){
    const [listing,setListing] = useState()
    const [error,setError]  = useState(null)
    const [loading,setLoading] = useState(true)

    const abortController  = useRef(null)

    useEffect(()=>{

        async function fetchDetailListing(){
            setLoading(true)
            setError(null)

            abortController.current  = new AbortController()
            try {
                const response = await api.get(url,
                    {
                        ...options,
                        signal:abortController.current?.signal 
                    }
                )
                setListing(response.data)
                
            } catch (error) {
                if(axios.isCancel(error)){
                    return 
                }
                setError('Something Went Wrong, Please Try again Later')
                
            }finally{
                setLoading(false)
            }
        }
        fetchDetailListing()
        return ()=>{
            abortController.current?.abort()
        }
    },[options,url])
    return {listing,loading,error}
}
export default useFetch