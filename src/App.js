import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Pages/Home/Home';
import Services from './component/Pages/Services/Services';
import AddServicePage from './component/Pages/AddServicePage/AddServicePage';
import Blog from './component/Pages/Blog/Blog';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';
import PrivateRouter from './component/Routh/PrivateRouter';
import { Toaster } from 'react-hot-toast';
import ViewDetails from './component/Pages/ViewDetails/ViewDetails';
import Reviews from './component/Pages/ViewDetails/ReviewOptionform/Reviews';
import EditReviewForm from './component/Pages/ViewDetails/ReviewOptionform/EditReviewForm';

function App() {
  const router = createBrowserRouter([
   {path:'/',element:<Main></Main>,children:[
    {path:'/',element:<Home></Home>},
    {path:'/home',element:<Home></Home>},
    {path:'/services',element:<Services></Services>,
  loader:()=>fetch('https://server-three-ruby.vercel.app/alltravel')
  },
    {path:'/addservice',element:<PrivateRouter><AddServicePage></AddServicePage></PrivateRouter>},
    {path:'/blog',element:<Blog></Blog>},
    {path:'/login',element:<Login></Login>},
    {path:'/register',element:<Register></Register>},
    {path:'/viewDetails/:id',element:<PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
    loader:({params})=>fetch(`https://server-three-ruby.vercel.app/viewDetails/${params.id}`)
    },
    {path:'/reviewpage',element:<PrivateRouter><Reviews></Reviews></PrivateRouter>,
    loader:()=>fetch('https://server-three-ruby.vercel.app/review')
  },
    {path:'/editreviewform/:id',element:<PrivateRouter><EditReviewForm></EditReviewForm></PrivateRouter>,
    loader:({params})=>fetch(`https://server-three-ruby.vercel.app/editreviewform/${params.id}`)
  }
   ]},
  ])
  return (
    <div className="">
   <RouterProvider router={router}></RouterProvider>
   <Toaster></Toaster>
    </div>
  );
}

export default App;
