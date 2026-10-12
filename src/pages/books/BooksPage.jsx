import React, { useContext, useState } from 'react';
import { BookContexts } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';

const BooksPage = () => {
      const {readBooks, wishList} = useContext(BookContexts);
        console.log (readBooks, wishList);

    const [sortingType, setSortingType] = useState("");
    console.log(sortingType);
    return (
        <div className='container mx-auto'>
          {/*From daisy UI drop down */}
          <div className='flex justify-center my-3'>
          <div className="dropdown dropdown-start">
      <div tabIndex={0} role="button" className="btn m-1">
        Sorted By ⬇️
        </div>
      <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li onClick={() => setSortingType("pages")}><a>pages</a></li>
      <li onClick={() => setSortingType("rating")}><a>rating</a></li>
     </ul>
     </div>
          </div>
           

        {/* Form daisy UI Tab*/}
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList sortingType = {sortingType} />
    </TabPanel>
    <TabPanel>
      <ListedWishList sortingType = {sortingType} />
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default BooksPage;