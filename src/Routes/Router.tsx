import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Books from "../pages/Books";
import PrivateRoute from "./PrivateRoute";
import MyBooks from "../pages/MyBooks";
import MySingleBook from "../components/MySingleBook";
import WishList from "../components/WishList";
import Reading from "../components/Reading";
import DetailsBook from "../pages/DetailsBook";
import AddBook from "../pages/AddBook";
import EditBook from "../components/EditBook";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/mybooks",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/mybooks",
            element: <MySingleBook />,
          },
          {
            path: "/mybooks/wishlist",
            element: <WishList />,
          },
          {
            path: "/mybooks/reading",
            element: <Reading />,
          },
        ],
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <DetailsBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/editbook/:id",
        element: <EditBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
