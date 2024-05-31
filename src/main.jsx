import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Authors from './components/Authors/Authors.jsx';
import Publishers from './components/Publishers/Publishers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../bookData.json')
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../bookData.json')
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../bookData.json')
      },
      {
        path: '/authors',
        element: <Authors></Authors>,
        loader: () => fetch('../bookData.json')
      },
      {
        path: '/publishers',
        element: <Publishers></Publishers>,
        loader: () => fetch('../bookData.json')
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);