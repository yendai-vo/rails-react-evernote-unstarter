import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class AlbumGallery extends Component {

  

  render() {
    return (
      <React.Fragment>
        <p>Album Name: {this.props.chosenAlbum.title}</p>
        <img src={this.props.chosenAlbum.image} className="img-fluid" />
        <p>Description: {this.props.chosenAlbum.description}</p>
        <Button variant="contained" color="primary" >Edit</Button>
      </React.Fragment>
    )
  }
}

export default AlbumGallery;