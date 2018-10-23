import React, { Component } from 'react';
import PhotoCard from '../components/PhotoCard';
import PropTypes from 'prop-types';

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
class AlbumGallery extends Component {
  state = {
    image_url: '',
    photos: [],
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  fetchPhotos = () => {

    fetch("http://localhost:3001/photos",
  {
    headers: {
      Authorization: `${localStorage.token}`, 
      "Accept" : "Application/json",
      "Content-Type": "Application/json"
    }
  })
      .then(res => res.json())
      .then(data => {
        // debugger
        this.setState({ photos: data })});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch("http://localhost:3001/photos", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then(data => {
      this.setState({
        image_url: data.image_url
      })
    })
  }

  renderPhotos = () => {
    if (!this.state.photos.length) return;
    return this.state.photos.map(item => (
       <PhotoCard
       id={item.id} 
       image={item.image_url} 
       title={item.title} 
       />
   )).sort(function(a, b) {
     return a - b}).reverse()}

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        {/* <p>Album Name: {this.props.chosenAlbum.title}</p>
        <img src={this.props.chosenAlbum.image} className="img-fluid" />
        <p>Description: {this.props.chosenAlbum.description}</p>
        <Button variant="contained" color="primary" onClick={() => this.props.handleEdit(this.props.chosenAlbum.id)}>Edit</Button> */}
        <h3>Album Photos</h3>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal">
            <InputLabel htmlFor="Title">Title</InputLabel>
            <Input id="title" name="title" autoComplete="title" autoFocus />
          </FormControl>

          <FormControl margin="normal" fullWidth >
            <Input type="file" id="file" name="file" autoComplete="file" autoFocus multiple/>
          </FormControl>

          {/* <FormControl>
            <InputLabel htmlFor="album">Album</InputLabel>
            <Input id="album" name="album_id" autoComplete="album" type="text" style={{display:'none'}} value='1' placeholder="album_id" autoFocus />
          </FormControl> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit Photo
          </Button>
        </form>
        {this.renderPhotos()}
      </React.Fragment>
    )
  }
}

AlbumGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumGallery);