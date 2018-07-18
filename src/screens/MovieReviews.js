import React, { PureComponent } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import PropTypes from "prop-types";

export default class MovieReviews extends PureComponent {
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
