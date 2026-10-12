import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../utils/LocalDB';

export const BookContexts = createContext();
const BookContext = ({children}) => {
       const [readBooks, setReadBooks] = useState (() => getAllReadListFromLocalDB())
       const [wishList, setWishList] = useState([])
// useEffect moloto dependancy handle ar jonno beboher kori
    useEffect (() => {
        getAllReadListFromLocalDB()
    }, []) 
    const handleRead = (currentBook) => {
        addReadListToLocalDB(currentBook)
        const isExistBook = readBooks.find((book) => book.bookId === currentBook.bookId );
        if(isExistBook)
        {
            toast.error("The book is already exist");
        }
        else{
            setReadBooks([...readBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`);
        }
        console.log(currentBook, readBooks, "book");
    }

    const handleWishList = (currentBook) => {

        const isExistInReadList = readBooks.find ((book) => book.bookId === currentBook.bookId);
        if(isExistInReadList)
        {
            toast.error("This book is already exist in read list");
            return;
        }
        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId );
        if(isExistBook)
        {
            toast.error("The book is already exist");
        }
        else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`);
        }
        console.log(currentBook, readBooks, "book");
    }
    
    const data = {
        readBooks,
        setReadBooks,
       handleRead,
       handleWishList,
       wishList,
       setWishList
    }
    return (
        <BookContexts.Provider value={data}>
            {children}
        </BookContexts.Provider>
    );
};

export default BookContext;