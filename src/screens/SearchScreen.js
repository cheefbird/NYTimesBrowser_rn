import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchArticles, searchStarted } from "../actions";
import SearchCard from "../components/SearchCard";
import Colors from "../Colors";

class SearchScreen extends Component {
  resultText = count => `${count} results found!`;

  search = query => {
    this.props.searchStarted();
    this.props.searchArticles(query);
  };

  render() {
    const { results, hits, isSearching } = this.props;

    return (
      <View style={styles.container}>
        {isSearching ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color={Colors.darkOrange} />
          </View>
        ) : (
          <SearchCard handler={this.search} />
        )}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  results: PropTypes.array.isRequired,
  hits: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  const results = _.map(state.searchResults.docs, result => {
    return { ...result };
  });

  const { hits } = state.searchResults.meta;

  const { isSearching } = state.searchResults;

  return { results, hits, isSearching };
};

export default connect(
  mapStateToProps,
  { searchArticles, searchStarted }
)(SearchScreen);
