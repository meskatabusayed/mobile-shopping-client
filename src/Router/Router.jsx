import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandCategory from "../pages/BrandCategory/BrandCategory";
import DetailsProduct from "../pages/DetailsProduct/DetailsProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";


const myCreatedRoute = createBrowserRouter([
{
    path: '/' ,
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/datas'),
        

        },
        {
            path: '/brandcategory/:brand',
            element: <BrandCategory></BrandCategory>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.brand}`)

        },
        {
            path: '/details/:id' ,
            element: <DetailsProduct></DetailsProduct>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)

        },
        {
            path: '/update/:id' ,
            element: <UpdateProduct></UpdateProduct>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path: '/addproduct',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            
        },
        {
            path: '/mycart',
            element: <MyCart></MyCart>,
            loader: () => fetch('http://localhost:5000/user')
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        }
        
    ]


}

])

export default myCreatedRoute;