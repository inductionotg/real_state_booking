import { DateRangePicker} from '../components/ui/DateRangePicker'
import {Input} from '../components/ui/input'
import {Stepper} from '../components/ui/Stepper'
import {Button} from '../components/ui/button'
import { Search } from 'lucide-react'
import { useState } from 'react'
function ListingFilters({onChange}){
    const [dates,setDates] = useState()
    const [guests,setGuests] = useState(0)
    const [search,setSearch] = useState('')

    const handleSubmit=()=>{
        onChange({search,guests,dates})
    }
    return (
        <div className='flex flex-row justify-center items-center gap-2'>
            <Input 
                className="w-[400px]"  
                placeholder="Search Destinations"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
            />
            <DateRangePicker
                value={dates}
                onChange={setDates}
                minDate = {new Date()}
                placeholder="Select Dates"
            />
            <Stepper label ="guests" value={guests} onChange={setGuests}/>
            <Button className=" bg-green-400" onClick={handleSubmit}>
                <Search className='h-4 w-4'/>
            </Button>
        </div>
    )
}
export default ListingFilters