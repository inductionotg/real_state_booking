import { Heart } from "lucide-react"
import { useDispatch,useSelector } from "react-redux"
import { Button } from "./ui"
import { cn } from "@/lib/utils/cn"
import { addFavoriteListings,removeFavoriteListings } from "@/state/listingSlice"
import { useMemo } from "react"
function ListingFavouriteButton({className,listing}){
    const favoriteListingsIds = useSelector((state)=>state.listings.favouriteListingId)

    const dispatch = useDispatch()

    const isFavorite = useMemo(()=> favoriteListingsIds.includes(listing.id),[favoriteListingsIds,listing])
    console.log("help is favorite",isFavorite)
    return (
        <Button
            className={className}
            variant = 'outline'
            onClick = {(e)=>{
                e.preventDefault();
                e.stopPropagation()

                if(isFavorite){
                    dispatch(removeFavoriteListings(listing.id))
                }
                else {
                    dispatch(addFavoriteListings(listing.id))
                }
            }}
        >
            <Heart 
                className={cn('h-4 w-4',{'fill-primary text-primary':isFavorite})}/>
        </Button>
    )
}
export default ListingFavouriteButton