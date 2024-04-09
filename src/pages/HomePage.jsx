import ListingList from "@/components/ListingList"
import { isListingAvailable, listings as staticListings } from "@/api/data/listings"
import { useEffect, useState } from "react"
import ListingFilters from "@/components/ListingFilters"
import { Separator } from "@radix-ui/react-dropdown-menu"
import api from '@/api'
import { Spinner } from "@/components/ui"
function HomePage(){
    const [listings,setListings] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [filters,setFilters] = useState({
        dates:undefined,
        guests:0,
        search:''

    })
    console.log(api)

    useEffect(()=>{
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
    },[filters])

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
        if(isLoading){
            return (
                <div className="flex justify-center">
                    <Spinner sm="xl"/>
                </div>
            )
        }
        if(error){
            <div>{error}</div>
        }
        return <ListingList listings={listings}/>

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