import { Spinner } from "./ui/Spinner"
function DataRender({isLoading,error,children}){
        if(isLoading){
            return (
                <div className="flex justify-center">
                    <Spinner sm="xl"/>
                </div>
            )
        }
        if(error){
            return  <div>{error}</div>
        }
        return children
       
    
}
export default DataRender