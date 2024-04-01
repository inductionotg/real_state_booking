import ListingList from "@/components/ListingList"
import { listings } from "@/api/data/listings"
function HomePage(){
    return (
        <div className="container py-4">
            <ListingList listings={listings}/>
        </div>
    )
}
export default HomePage