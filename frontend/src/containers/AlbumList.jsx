import React, { Component } from 'react'

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
        This is where the Album List will be!
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="name" placeholder="Your Album Title" />
          <div><textarea type="message" name="description" placeholder="Album Description" rows="5" cols="30"></textarea></div>
          <div><input type="file" name="picture" /></div>
          <div><input type="submit" /></div>
        </form>
      </div>
    )
  }
}

export default AlbumList;