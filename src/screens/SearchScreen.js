import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import SearchCard from "../components/SearchCard";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchCard />
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
