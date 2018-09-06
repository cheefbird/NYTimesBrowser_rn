import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovieReviews } from "../actions";
import MovieReview from "../components/MovieReview";
import Colors from "../Colors";

class MovieReviews extends PureComponent {
  static navigationOptions = {
    title: "Movie Reviews"
  };

  componentDidMount() {
    this.props.fetchMovieReviews();
  }

  keyExtractor = item => item.link.url;

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const {
      display_title,
      mpaa_rating,
      headline,
      summary_short,
      multimedia,
      link
    } = item;

    const labelTitle = `${display_title} - `;
    const rating = this.createRatingText(mpaa_rating);

    const url = link.url.replace(/http/i, "https");

    return (
      <MovieReview
        title={headline}
        subtitle={summary_short}
        labelTitle={labelTitle}
        labelRating={rating}
        imageUri={multimedia.src}
        onPress={() =>
          navigation.push("Detail", {
            url: url
          })
        }
      />
    );
  };

  createRatingText(rating) {
    if (rating === "" || rating === "Not Rated") {
      return "Not Yet Rated";
    } else {
      return `Rated ${rating}`;
    }
  }

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
    backgroundColor: Colors.white
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
