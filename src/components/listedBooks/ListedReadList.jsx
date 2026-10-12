import React, { useContext, useEffect, useState } from 'react';
import { BookContexts } from '../../context/BookContext';
import Bookcard from '../UI/Bookcard';

const ListedReadList = ({sortingType}) => {
    const {readBooks} = useContext(BookContexts);
            console.log (readBooks);
    const [filteredReadList, setFilteredReadList] = useState(readBooks);
    
// useEffect moloto dependancy handle ar jonno beboher kori
    useEffect(() => {
        if (sortingType){
            if (sortingType === 'pages'){
                const sortedData = [...readBooks].sort ((a, b) => a.totalPages - b.totalPages,);
                console.log(sortedData);
                setFilteredReadList(sortedData);
            }
            else if (sortingType === 'rating'){
             const sortedData = [...readBooks].sort ((a, b) => a.rating - b.rating,);
                console.log(sortedData);
                setFilteredReadList(sortedData);
            }
        }
    }, [sortingType, readBooks])

    if (filteredReadList.length === 0){
        return (
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
                <h2 className='font-bold text-3xl'>No read list data found</h2>
            </div>
        )
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    filteredReadList.map ((book, ind) => (
                        <Bookcard key={ind} book={book}></Bookcard>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedReadList;