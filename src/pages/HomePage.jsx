import ListingList from "@/components/ListingList"
import { isListingAvailable, listings as staticListings } from "@/api/data/listings"
import { useEffect, useState } from "react"
import ListingFilters from "@/components/ListingFilters"
import { Separator } from "@radix-ui/react-dropdown-menu"
import api from '@/api'
function HomePage(){
    const [listings,setListings] = useState([])
    console.log(api)

    useEffect(()=>{
        console.log("effect")
        const fetchListings = async() =>{
            try {
                console.log("effect")
                const response = await api.get('/api/listings');
                console.log("response")
                setListings(response.data);
                console.log("dsdsd",response.data)
                setListings(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchListings()
    },[])

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
    function handleChange(input){}
    function renderListingList(){

    }
    return (
        <div className="container py-4">
            <div className="mb-4">
                <ListingFilters onChange={handleChange}/>
                <Separator className="py-4"/>
            </div>
            
            <ListingList listings={listings}/>
        </div>
    )
}
export default HomePage