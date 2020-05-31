import React from 'react';


const SearchBox = ({searchChange}) => {

    return (
        <div className="bg-light-green dib br3 ">
           <input type="search" placeholder="search robots" onChange={searchChange}></input>
        </div>


    );

}
export default SearchBox;