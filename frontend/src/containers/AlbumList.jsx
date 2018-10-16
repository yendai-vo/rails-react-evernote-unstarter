import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AlbumListItem from '../components/AlbumListItem';

import Button from '@material-ui/core/Button';

class AlbumList extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    // console.log(data)
    // debugger

    fetch("http://localhost:3001/albums", {
      method: "POST",
      body: data
    })
  }

  render() {
    return (
      <div>
        Welcome to Your Album List!
        <div><Button variant="contained" color="primary">Add a New Album</Button></div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="name" placeholder="Your Album Title" />
          <div><textarea type="message" name="description" placeholder="Album Description" rows="5" cols="30"></textarea></div>
          <div><input type="file" name="picture" /></div>
          <div><input type="submit" /></div>
        </form>
        <div>
          <AlbumListItem />
          <AlbumListItem />
          <AlbumListItem />
          <AlbumListItem />
        </div>
      </div>
    )
  }
}

export default AlbumList;