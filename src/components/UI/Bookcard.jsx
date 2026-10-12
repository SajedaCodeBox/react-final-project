import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';
const Bookcard = ({book}) => {
    return (
        <Link to={`/booksDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                    <figure className='p-6 '>
                 <img src={book.image}
      alt={book.bookName} className='rounded-xl h-[250px]' />
                    </figure>
    <div className="card-body">

        <div className='flex items-center gap-2'>
         {
            book.tags.map((tag, index) => (<div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))
         }
         </div> 
    
      <h2 className='font-bold text-xl'>{book.bookName}</h2> 
   <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-4 text-xl">
      <div className="">{book.category}</div>
      <div className="flex items-center gap-2 text-xl">{book.rating} <CiStar /></div>
    </div>
  </div>
        </Link>
    );
};

export default Bookcard;