import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function AlbumListItem(props) {
  const { classes, image, description, title, id, handleDelete } = props;
  return (
    <div>  
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Beach with House"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Open Gallery
          </Button>
          <Button size="small" color="primary" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </CardActions>
      </Card><br/>
    </div>
  );
}

AlbumListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumListItem);

// class AlbumListItem extends Component {
//   render(props) {
//     return (
//       <div>
//         <div>My Album List Item Title</div>
//         <img src = "https://www.moneysense.ca/wp-content/uploads/2017/01/vacation.jpg" alt="Beach picture" width='auto' height='200'/>
//       </div>
//     )
//   }
// }

// export default AlbumListItem;
