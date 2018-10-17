import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import AlbumListItem from '../components/AlbumListItem';

// import Button from '@material-ui/core/Button';

class AlbumList extends Component {
  // state = {
  //   image_url: '',
  //   albums: [],
  // }

  // componentDidMount() {
  //   this.fetchAlbums()
  // }

  // fetchAlbums = () => {

  //   fetch("http://localhost:3001/albums")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ albums: data })});
  // }

  // handleSubmit = (e) => {
  //   // e.preventDefault();

  //   const data = new FormData(e.target);

  //   // console.log(data)
  //   // debugger

  //   fetch("http://localhost:3001/albums", {
  //     method: "POST",
  //     body: data
  //   }).then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       image_url: data.image_url
  //     })
  //   })
  // }

  // handleDelete = id => {
  //   fetch(`http://localhost:3001/albums/${id}`, {
  //     method: "delete",
  //   })

  //   this.fetchAlbums()
  // }

  // renderAlbums = () => {
  //   debugger
  //  return this.state.albums.map(item => (
  //     <AlbumListItem handleDelete={this.handleDelete} id={item.id} image={item.image_url} title={item.name} description={item.description} />
  // )).sort(function(a, b) {
  //   return a - b}).reverse()}

  render() {
    return (
      <div>
        
        {/* <div><Button variant="contained" color="primary" >Add a New Album</Button></div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="user_id" style={{display:'none'}} value='1' placeholder="your user_id" />
          <input type="text" name="name" placeholder="Your Album Title" />
          <div><textarea type="message" name="description" placeholder="Album Description" rows="5" cols="30"></textarea></div>
          <div><input type="file" name="picture" /></div>
          <div><input type="submit" /></div>
        </form>
        <div>
          <img src={this.state.image_url} />
        </div>
        <div>
          {this.renderAlbums()}
        </div> */}
      </div>
    )
  }
}

export default AlbumList;