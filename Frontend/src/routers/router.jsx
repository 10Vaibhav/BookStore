import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home.jsx"
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";
import SingleBook from "../pages/books/SingleBook.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import OrderPage from "../pages/books/OrderPage.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            }
        ]
    },
    {
        path: "/admin",
        element:<AdminLogin/>
    },
    {
        path: "/dashboard",
        element: <AdminRoute>Admin DashBoard</AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute><div>Add New Book</div></AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><div>Edit Book</div></AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute><div>Manage Books</div></AdminRoute>
            }
        ]
    }
]);

export default router;

