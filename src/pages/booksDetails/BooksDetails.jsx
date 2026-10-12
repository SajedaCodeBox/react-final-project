import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContexts } from '../../context/BookContext';


const BooksDetails = () => {
  // card a click korar por search ber a j id ta asbe seta paoer jonno useParams () ata k call korbo
    const {id} = useParams();
    console.log (id);

  const books = useLoaderData();
    // console.log (books)

    const expectedBook = books.find (book => book.bookId === Number(id))
    // console.log (expectedBook);

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;

    const {handleRead, handleWishList} = useContext(BookContexts);
    console.log (handleRead);

 
    return (
        // Details Card: 
        <div className="grid grid-cols-2 bg-base-100  container mx-auto border p-15">
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
    <img
      src= {image} alt="Album" className='h-[400px]' />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
    <h2>By: {author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p>Review : {review}</p>
     <div className='flex items-center gap-2'>
        <span className='font-semibold'>Tags</span>
         {
             tags.map((tag, index) => (<div key={index} className="badge text-green-500 bg-green-100 font-bold ">{tag}</div>))
         }
         </div> 

         <div className='space-y-3 border-t'>
        <div className='flex items-center gap-9 '>
        <span>Number of Pages:</span> <span className='font-bold'>{totalPages}</span>
         </div>
        <div className='flex items-center gap-21'>
        <span>Publisher:</span> <span className='font-bold'>{publisher}</span>
         </div>
        <div className='flex items-center gap-8'>
        <span>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span>
         </div>
        <div className='flex items-center gap-26'>
        <span>Rating:</span> <span className='font-bold'>{rating}</span>
         </div>
         <div className="flex gap-4">
      <button onClick={() => handleRead(expectedBook)} className="btn">Read</button>
      <button onClick={() => handleWishList(expectedBook)} className="btn btn-accent text-white">WishList</button>
    </div>
         </div>
    
  </div>
</div>
    );
};

export default BooksDetails;