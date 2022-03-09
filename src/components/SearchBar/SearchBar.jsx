import React from 'react'
import "./SearchBar.scss"

 const SearchBar = props => {
    const  {searchTerm, handleSearchInput } = props;
  return (
      <div className='form-container'>
    <form >
        <label htmlFor=""></label>
        <input className ="searchBox" type="text" value={searchTerm} onInput={handleSearchInput} />
    </form>
    </div>
  )
}
export default SearchBar;