import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovieReviews } from "../actions";

class MovieReviews extends PureComponent {
  componentDidMount() {
    this.props.fetchMovieReviews();
  }

  keyExtractor = item => item.link.url;

  render() {
    return (
      <FlatList
        data={this.props.reviews}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  const reviews = _.map(state.movieReviews, review => {
    return { ...review };
  });

  return { reviews };
};

export default connect(
  mapStateToProps,
  { fetchMovieReviews }
)(MovieReviews);
