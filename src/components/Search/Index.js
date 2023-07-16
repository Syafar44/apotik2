import React, { useState } from 'react'


const Search = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm)
  };
 
  return (
    <>
      <input
        type="text"
        placeholder="Cari Obat..."
        value={searchTerm}
        onChange={hendleSearch}
      />
    </>
  );
};

export default Search;