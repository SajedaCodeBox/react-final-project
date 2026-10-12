import { createBrowserRouter} from 'react-router'
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import BooksPage from '../pages/books/BooksPage';
import ErrorPage from '../pages/errorPage/ErrorPage';
import BooksDetails from '../pages/booksDetails/BooksDetails';


export const router = createBrowserRouter ([
  {
  path: "/",
  Component: MainLayout, 
  children: [
    {
      index: true,
      element: <Homepage></Homepage>
    },
    {
      path: "/books",
      element: <BooksPage></BooksPage>
    },
    {
      // Akhane ami /: ar por jekono nam dite pari
      path: "/booksDetails/:id",
      Component: BooksDetails,
      loader: ()=> fetch('/booksData.json')
    }
  ],
  errorElement: <ErrorPage></ErrorPage>

  }

  
]);