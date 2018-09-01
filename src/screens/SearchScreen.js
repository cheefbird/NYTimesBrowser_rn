import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import { searchArticles } from "../actions";
import SearchCard from "../components/SearchCard";

class SearchScreen extends Component {
  resultText = count => `${count} results found!`;

  search = query => this.props.searchArticles(query);

  render() {
    const { results, hits } = this.props;

    return (
      <View style={styles.container}>
        <SearchCard handler={this.search} />
        {hits > 0 ? <Text>{this.resultText(hits)}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  const results = _.map(state.searchResults.docs, result => {
    return { ...result };
  });

  const { hits } = state.searchResults.meta;

  return { results, hits };
};

export default connect(
  mapStateToProps,
  { searchArticles }
)(SearchScreen);
