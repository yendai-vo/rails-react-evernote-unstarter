import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import AlbumList from './AlbumList';
import AlbumGallery from './AlbumGallery';
import '../GalCont.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
class GalleryContainer extends Component {

  state = {
    image_url: '',
    albums: [],
    search: '',
    title: '',
    description: '',
    chosenAlbum: []
  }

  componentDidMount() {
    this.fetchAlbums()
  }

  fetchAlbums = () => {

    fetch("http://localhost:3001/albums",{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
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
    e.preventDefault();
    const data = new FormData(e.target);

    fetch("http://localhost:3001/albums", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then(data => {
      this.setState({
        title: data.title,
        description: data.description
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
      <AlbumList 
      albums={this.filterAlbums()} 
      handleDelete={this.handleDelete} 
      id={item.id} 
      // image={item.image_url} 
      title={item.name} 
      description={item.description} 
      handleClick={this.handleClick}
      />
  )).sort(function(a, b) {
    return a - b}).reverse()}

  render() {
    const { classes } = this.props;
    // console.log(this.state)
    return (
      <div >
        <div className="row">
          <div className="col-sm-12">
            <SearchBar search={this.handleChange}/>&nbsp;
          </div>
        <div className="col-sm-4">
        <h3>Album List</h3>
        {/* <Button variant="contained" color="primary" >Add a New Album</Button> */}
        <div class="form-group">
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal">
            <InputLabel htmlFor="Title"> Album Title</InputLabel>
            <Input id="title" name="title" autoComplete="title" autoFocus />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="Description"> Album Description</InputLabel>
            <Input id="description" name="description" autoComplete="description" autoFocus />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit
          </Button>
        </form>
        </div>

          {/* <img src={this.state.image_url} /> */}


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

GalleryContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryContainer);