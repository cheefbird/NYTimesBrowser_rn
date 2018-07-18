import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovieReviews } from "../actions";
import StandardArticle from "../components/StandardArticle";

class MovieReviews extends PureComponent {
  componentDidMount() {
    this.props.fetchMovieReviews();
  }

  keyExtractor = item => item.link.url;

  renderItem = ({ item }) => {
    const {
      display_title,
      mpaa_rating,
      headline,
      summary_short,
      multimedia,
      link
    } = item;

    const labelText = `${display_title} - Rated ${mpaa_rating}`;

    return (
      <StandardArticle
        title={headline}
        subtitle={summary_short}
        sectionText={labelText}
        imageUri={multimedia.src}
        onPress={() =>
          navigation.push("Detail", {
            url: link.url
          })
        }
      />
    );
  };

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
