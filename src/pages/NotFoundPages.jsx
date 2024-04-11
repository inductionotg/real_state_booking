import { Card } from "@/components/ui"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui"
function NotFoundPage(){
    return (
        <div className="container flex h-screen w-screen items-center py-4 justify-center text-center">
            <Card className='p-8'>
                <h1>Page Not Found</h1>
                <p className="pb-2">
                    Unfortunately , The Page that ypu are looking for doesn't exist
                </p>
                <Button asChild>
                    <Link to='/'>Back to Home</Link>
                </Button>
            </Card>
        </div>
    )
}
export default NotFoundPage