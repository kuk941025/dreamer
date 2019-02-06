import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlbumItem from './AlbumItem'
import Footer from '../layout/Footer'
import AlbumTop from './AlbumTop'
import AlbumTopPosting from './AlbumTopPosting'
import { compose } from 'redux'
import { connect } from 'react-redux'


const styles = theme => (
  {
  
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },

});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Album = ({classes, posts, authSignInSuccess}) => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {authSignInSuccess ? <AlbumTopPosting /> : <AlbumTopPosting/>}
        
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {posts.map(post => {
              return (
                <AlbumItem card={post.id} post={post} key={post.id}/> 
              )
            })}
          </Grid>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  //this data is from rootReducer
  console.log(state); 
  return {
    posts: state.post.posts,
    authSignInSuccess : state.auth.authSignInSuccess,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Album);