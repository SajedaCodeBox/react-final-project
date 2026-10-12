import React, { use } from 'react';
import Bookcard from '../UI/Bookcard';

const booksPromise = fetch('/booksData.json').then((res) => res.json())
const AllBooks = () => {
    const books = use(booksPromise);
    // console.log(books,"books");
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book, index) => {
                        return(
                            
                            <Bookcard key={index} book={book}></Bookcard>
                           
                        )
                        }
                    )
                }
            </div>
        </div>
    );
};

export default AllBooks;