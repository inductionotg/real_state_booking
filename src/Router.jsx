import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import ListingDetailsPage from './pages/ListingDetailsPage'
import NotFoundPage from './pages/NotFoundPages'
import FavoriteListingsPage from './pages/FavoriteListingsPage'
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
            }, 
            {
                path:'/favorites',
                element:<FavoriteListingsPage/>
            }
        ]
    }
])

const Router = ()=><RouterProvider router={router}></RouterProvider>

export default Router