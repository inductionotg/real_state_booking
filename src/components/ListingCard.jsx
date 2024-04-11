
import { Card,CardContent } from "@/components/ui/Card"
import { getImageUrl } from "@/lib/utils/images"
import { DollarSign,Pin,Users } from "lucide-react"
import ListingCardImages from "./ListingCardImages"
import { Link } from "react-router-dom"
function ListingCard({listing}){
    return(
        <Link to={`listings/${listing.id}`}>
            <Card className="w-[320px]" >
                <ListingCardImages listings={listing}/>
                <CardContent className="p-4">
                    <h2 className="mb-0 text-xl font-semibold">{listing.name}</h2>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary"/>
                        <span className="text-muted-foreground">
                            <span className="font-bold text-foreground">{listing.price}</span>/ night
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Pin className="h-4 w-4 text-primary"/>
                        <span className="text-muted-foreground">
                            <span className="font-bold text-foreground">{listing.location.name}</span>/ night
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary"/>
                        <span className="text-muted-foreground">
                            <span className="font-bold text-foreground">{listing.maxGuests} Guests</span>
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
export default ListingCard