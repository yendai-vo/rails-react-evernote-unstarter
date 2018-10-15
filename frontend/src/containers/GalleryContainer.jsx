import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import AlbumList from './AlbumList';
import AlbumGallery from './AlbumGallery';
import '../GalCont.css';

class GalleryContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <section class="indent-1"><AlbumList /></section>
        <section><AlbumGallery /></section>
      </div>
    )
  }
}

export default GalleryContainer;