import { createBrowserRouter } from "react-router-dom";
import App from '@/App';
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import NotFound from "@/pages/NotFound";
import AddBook from "@/pages/AddBook";
import EditBook from "@/pages/EditBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);


export default routes;