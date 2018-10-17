import React from 'react'

const SearchBar = (props) => {
  return (
    <React.Fragment>
      <input
        type="text"
        onChange={(e) => props.search(e.target.value)}
        placeholder={"Search your Albums"}
      />
      <button><i className="fa fa-search"/> Search</button>
    </React.Fragment>
  )
}

export default SearchBar;