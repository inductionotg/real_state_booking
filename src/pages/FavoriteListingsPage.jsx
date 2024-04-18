import { useMemo } from "react"
import {  useSelector } from "react-redux"
import ListingList from "@/components/ListingList"
function FavoriteListingsPage(){
    const {listings,favouriteListingId} = useSelector((state)=>state.listings)

    const favoriteListings = useMemo(
        ()=>listings.filter((listing)=>favouriteListingId.includes(listing.id))
        ,[listings,favouriteListingId])
    console.log("fdfdf",favoriteListings)
    return (
        <div className="container py-4">
            <ListingList listings={favoriteListings}/>
        </div>
    )
}
export default FavoriteListingsPage