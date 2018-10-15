import React, { Component } from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'

class SearchBar extends Component {

    state = {
        searchTerm: ''
      }
    
      handleChange = (searchTerm) => {
        this.setState({
          searchTerm: searchTerm
        },()=>console.log(this.state))
      }
      
  render() {
    return (
      <div>
        <input type="text" id="current-search" placeholder="Search Gallery" value={this.state.searchTerm}></input>
        <button><i className="fa fa-search"/> Search</button>
      </div>
    )
  }
}

export default SearchBar;