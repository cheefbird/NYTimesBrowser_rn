import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovieReviews } from "../actions";

class MovieReviews extends PureComponent {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
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
