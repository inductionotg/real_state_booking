
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext} 
    from './ui/Carousel'
    import { getImageUrl } from "@/lib/utils/images"
import {useState} from "react"
function ListingCardImages({listings}){
    const [isHovering,setHovering] = useState(false)
    return (
        <Carousel 
            className='w-full'
            onMouseEnter={()=>setHovering(true)}
            onMouseLeave={()=>setHovering(false)}
            >
            <CarouselContent className='ml-0'>
                {listings.images.map((image,index)=>{
                    return (
                        <CarouselItem key={image} className='pl-0'>
                            <img
                                className='h-[200px] w-full rounded-md object-cover'
                                src={getImageUrl(image)}
                               
                            />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            {isHovering && (
                <>
                    <CarouselPrevious className='absolute left-4'/>
                    <CarouselNext className='absolute right-4'/>
                </>
            )}
            
        </Carousel>
    )
}
export default ListingCardImages