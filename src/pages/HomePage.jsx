import ListingList from "@/components/ListingList"
import { isListingAvailable, listings as staticListings } from "@/api/data/listings"
import { useEffect, useMemo, useState } from "react"
import ListingFilters from "@/components/ListingFilters"
import { Separator } from "@radix-ui/react-dropdown-menu"
import api from '@/api'
import { Spinner } from "@/components/ui"
import useFetch from "@/hooks/useFetch"
function HomePage(){
   
    const [filters,setFilters] = useState({
        dates:undefined,
        guests:0,
        search:''

    })
    const fetchOptions = useMemo(()=>{params:filters},[filters])
    const {listing,loading,error} = useFetch('/api/listings',fetchOptions)

    /*useEffect(()=>{
        console.log("effect")
        const fetchListings = async() =>{
            setLoading(true)
            setError(null)
            try {
                const response = await api.get('/api/listings',{params:filters});
                setListings(response.data);
                
            } catch (error) {
                console.log(error)
                setError("Something Went Wrong")
            }
            finally{
                setLoading(false)
            }
        }
        fetchListings()
    },[filters])*/

    /*
    Reading Reference for search Input
    function handleChange(input){
        const {dates,search,guests} = input
        console.log(dates)
        let filteredListings = listings
        console.log(filteredListings)

        if(dates){
            filteredListings = filteredListings.filter((listing)=>(
                isListingAvailable(listing,dates)
            ))
        }

        if(guests){
            filteredListings = filteredListings.filter((listings)=>guests<=listings.maxGuests)
        }
        if(search){
            filteredListings = filteredListings.filter((listing)=>
             listing.name.toLowerCase().includes(search))
        }
        setListings(filteredListings)
    }*/
    function handleChange(filters){
        setFilters(filters)
    }
    function renderListingList(){
        if(loading){
            return (
                <div className="flex justify-center">
                    <Spinner sm="xl"/>
                </div>
            )
        }
        if(error){
           return  <div>{error}</div>
        }
        return <ListingList listings={listing}/>

    }
    return (
        <div className="container py-4">
            <div className="mb-4">
                <ListingFilters onChange={handleChange}/>
                <Separator className="py-4"/>
            </div>
            {renderListingList()}
            
        </div>
    )
}
export default HomePage