import api from "@/api"
import ListingDetailsCard from "@/components/ListingDetailsCard"
import { Spinner } from "@/components/ui"
import axios from "axios"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'
function ListingDetailsPage(){
    const {listingId} = useParams()
   
    const {listing,error,loading} = useFetch(`/api/listings/${listingId}`)
    console.log(listing)

    /*useEffect(()=>{

        async function fetchDetailListing(){
            setLoading(true)
            setError(null)

            abortController.current  = new AbortController()
            try {
                const response = await api.get(`/api/listings/${listingId}`,{
                   signal:abortController.current?.signal 
                })
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
    },[listingId])  
    */
    const renderListing=()=>{
        if(loading){
            return (
                <div className="flex justify-center">
                    <Spinner sm="xl"/>
                </div>
            )
        }
        if(error){
            return <div className="text-center text-red-800 text-3xl">{error}</div>
        }
        return <ListingDetailsCard listing={listing}/>
    }
    return (
        <div className="container py-4">
            {renderListing()}
        </div>
    )
}
export default ListingDetailsPage