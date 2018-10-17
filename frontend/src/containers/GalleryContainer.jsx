import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SearchBar from '../components/SearchBar';
import AlbumList from './AlbumList';
import AlbumListItem from '../components/AlbumListItem';
import AlbumGallery from './AlbumGallery';
import '../GalCont.css';
import Button from '@material-ui/core/Button';

class GalleryContainer extends Component {

  state = {
    image_url: '',
    albums: [],
    search: '',
    chosenAlbum: []
  }

  componentDidMount() {
    this.fetchAlbums()
  }

  fetchAlbums = () => {

    fetch("http://localhost:3001/albums")
      .then(res => res.json())
      .then(data => {
        this.setState({ albums: data })});
  }

  handleChange = (searchTerm) => {
    this.setState({
      search: searchTerm
      
    }, console.log(this.state))
  }

  handleClick = (album) => {
    console.log(album)
    this.chosenAlbum(album)
  }

  chosenAlbum = (album) => {

    this.setState({
      chosenAlbum: album
    })
  }

  filterAlbums = () => {
    if(this.state.search !== ''){
      return this.state.albums.filter((album) => {
        return album.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    } else {
      return this.state.albums
    }
  }

  handleSubmit = (e) => {
    // e.preventDefault();

    const data = new FormData(e.target);

    fetch("http://localhost:3001/albums", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then(data => {
      this.setState({
        image_url: data.image_url
      })
    })
  }


  handleEdit = (id) => {
    const editData = {name: this.state.chosenAlbum.title, description: this.state.chosenAlbum.description}

    fetch(`http://localhost:3001/albums/${id}`, {
      method: "PUT",
      body: JSON.stringify({editData}),
      headers: {
        "Access-Control-Request-Method": "PUT",
        "content-type": "application/json", "accept": "application/json"
      }
    }).then(res => res.json())
    .then(console.log)
  }

  handleDelete = id => {
    fetch(`http://localhost:3001/albums/${id}`, {
      method: "delete",
    })

    this.fetchAlbums()
  }

  renderAlbums = () => {
   return this.state.albums.map(item => (
      <AlbumListItem 
      albums={this.filterAlbums()} 
      handleDelete={this.handleDelete} 
      id={item.id} 
      image={item.image_url} 
      title={item.name} 
      description={item.description} 
      handleClick={this.handleClick}
      />
  )).sort(function(a, b) {
    return a - b}).reverse()}

  render() {
    console.log(this.state)
    return (
      <div >
        <div className="row">
          <div className="col-sm-12">
            <SearchBar search={this.handleChange}/>
          </div>
        <div className="col-sm-4">
        <Button variant="contained" color="primary" >Add a New Album</Button>
        <div class="form-group">
        <form onSubmit={this.handleSubmit} >
          <input className="form-control" type="text" name="user_id" style={{display:'none'}} value='1' placeholder="your user_id" />
          <input className="form-control" type="text" name="name" placeholder="Your Album Title" />
          <div><textarea type="message" name="description" placeholder="Album Description" rows="5" cols="30"></textarea></div>
          <div><input className="form-control" type="file" name="picture" /></div>
          <div><input className="btn-lg btn-info" type="submit" /></div>
        </form>
        </div>

          <img src={this.state.image_url} />


          {this.state.albums.length ? this.renderAlbums() : null}


        </div>
        <div className="col-sm-8">
          <AlbumGallery chosenAlbum={this.state.chosenAlbum} handleEdit={this.handleEdit}/>
        </div>
{/* end */}

      </div>
      </div>

      
    )
  }
}

export default GalleryContainer;