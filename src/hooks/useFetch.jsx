import { useRef,useState,useEffect,useMemo } from "react"
import axios from "axios"
import api from "@/api"
import { getItem, setItem } from "@/lib/utils/localStorage"
function useFetch(url,options){
    const [listing,setListing] = useState()
    const [error,setError]  = useState(null)
    const [loading,setLoading] = useState(true)

    const abortController  = useRef(null)
    const STALE_VALUE = 5 *1000*60
    const storageKey = useMemo(()=>{
        if(!options?.params){
            return url
        }
        return url + '?' +JSON.stringify(options.params)
    })

    useEffect(()=>{
        async function fetchDetailListing(){
            const currentTime = new Date().getTime()
            const cachedData = getItem(storageKey)

            if(cachedData && currentTime - cachedData.lastFetched < STALE_VALUE){
                setListing(cachedData.listing)
                setLoading(false)
                return 
            }

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
    },[options,url,storageKey])

    useEffect(()=>{
        if(!listing){
            return 
        }
        setItem(storageKey,{
            lastFetched:new Date().getTime(),
            listing
        })
    },[listing,storageKey])
    return {listing,loading,error}
}
export default useFetch