import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import ListingDetailsPage from './pages/ListingDetailsPage'
import NotFoundPage from './pages/NotFoundPages'
const router  = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/listings/:listingId',
                element:<ListingDetailsPage/>
            }
        ]
    }
])

const Router = ()=><RouterProvider router={router}></RouterProvider>

export default Router