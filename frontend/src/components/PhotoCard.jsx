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

function PhotoCard(props) {
  const { classes, image, title, id, handleDelete } = props;
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
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </CardActions>
      </Card><br/>
    </div>
  );
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoCard);
