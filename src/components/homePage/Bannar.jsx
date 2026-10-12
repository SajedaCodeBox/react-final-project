import React from 'react';
import bookImg from '../../assets/hero_img.jpg'

const Bannar = () => {
    return (
       <div className="hero bg-base-200 min-h-[80vh] rounded-2xl container mx-auto my-8">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between md:p-20">
    <img src={bookImg}  className="md:max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br></br> your bookshelf</h1>
      
     <button className="btn btn-success text-white mt-4">View The List</button>

    </div>
  </div>
</div>
    );
};

export default Bannar;