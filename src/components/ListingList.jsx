import ListingCard from "./ListingCard"
function ListingList({listings}){
    console.log("listrings",listings)
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {listings.length>0?
            (
                listings.map((listing)=>{
                    return (
                        <ListingCard key={listing.id} listing={listing}/>
                    )
                })
            ):(
                <p>No listing found</p>
            )}
        </div>
    )
}
export default ListingList