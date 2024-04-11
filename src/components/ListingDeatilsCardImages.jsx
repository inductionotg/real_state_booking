import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext} 
    from './ui/Carousel'
    import { getImageUrl } from "@/lib/utils/images"
import {useState} from "react"
function ListingDeatilsCardImages({listing})
{
    const [currentImageIndex,setCurrentImageIndex] = useState(0)
    return (
        <>
            <img
                className='h-[500px] mb-4 w-full rounded-md'
                src={getImageUrl(listing.images[currentImageIndex])}
            />
            <Carousel className='mx-auto mb-4 w-[90%]'>
                <CarouselContent>
                    {listing.images.map((image,index)=>{
                        return (
                            <CarouselItem
                                className="basis-1/3 cursor-pointer"
                                onClick={()=>setCurrentImageIndex(index)}
                                isSelected={index === currentImageIndex}
                            >
                                <img
                                    src={getImageUrl(image)}
                                    className='h-52 w-full object-cover shadow-sm'
                                />
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                 <CarouselPrevious className='absolute left-4'/>
                 <CarouselNext className='absolute right-4 '/>
            </Carousel>
           
        </>
    )
}
export default ListingDeatilsCardImages