import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import WishList from './pages/WishList';
import RootLayout from './layouts/RootLayout';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<RootLayout/>}>
     <Route path="/" element={<Home />}></Route>
     <Route path="/blogpage" element={<BlogPage />}></Route>
     <Route path="/cart" element={<Cart />}></Route>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/register" element={<Register />}></Route>
     <Route path="/shop" element={<Shop />}></Route>
     <Route path="/wishList" element={<WishList />}></Route>
     <Route path="/*" element={<Error />}></Route>
   </Route>
  )
);



const App = () => {
  return (
    <div>
         <RouterProvider router={router} />

    </div>
  )
}

export default App