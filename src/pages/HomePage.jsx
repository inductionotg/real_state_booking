import ListingList from "@/components/ListingList"
import { useCallback, useEffect, useMemo, useState } from "react"
import ListingFilters from "@/components/ListingFilters"
import { Separator } from "@radix-ui/react-dropdown-menu"
import DataRender from "@/components/DataRender"
import { useSelector,useDispatch } from "react-redux"
import {fetchListings} from '../state/listingSlice'

function HomePage(){
   
    const [filters,setFilters] = useState({
        dates:undefined,
        guests:0,
        search:''

    })
    const {listings,error,status} = useSelector((state)=>state.listings)
    const dispatch = useDispatch()
    const fetchOptions = useMemo(()=>({params:filters}),[filters])
    useEffect(()=>{
        const request = dispatch(fetchListings(fetchOptions))

        return ()=>{
            request.abort()
        }
    },[dispatch,fetchOptions])
    /*
    commenting this custome hook for fetch as we are using createAsyncThunk for fetching 
    const {listing,loading,error} = useFetch('/api/listings',fetchOptions)
    */
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
    const handleChange = useCallback(function(filters) {
        setFilters(filters);
    }, []);
   
    return (
        <div className="container py-4">
            <div className="mb-4">
                <ListingFilters onChange={handleChange}/>
                <Separator className="py-4"/>
            </div>
            <DataRender isLoading={status==='loading'} error={error}>
                <ListingList listings={listings}/>
            </DataRender>
            
        </div>
    )
}
export default HomePage