import React, { useContext, useEffect, useState } from 'react';
import { BookContexts } from '../../context/BookContext';
import Bookcard from '../UI/Bookcard';

const ListedWishList = ({sortingType}) => {
    const { wishList} = useContext(BookContexts);
            console.log ( wishList);
 const [filteredWishList, setFilteredWishList] = useState(wishList);

    useEffect(() => {
        if (sortingType){
            if (sortingType === 'pages'){
                const sortedData = [...wishList].sort ((a, b) => a.rating - b.rating,);
                console.log(sortedData);
                setFilteredWishList(sortedData);
            }
            else if (sortingType === 'rating'){
             const sortedData = [...wishList].sort ((a, b) => a.rating - b.rating,);
                console.log(sortedData);
                setFilteredWishList(sortedData);
            }
        }
    }, [sortingType, wishList])




    if(filteredWishList.length === 0){
       return <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
        
    }
    return (
        <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    filteredWishList.map ((book, index) => (
                        <Bookcard key={index} book={book}></Bookcard>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishList;