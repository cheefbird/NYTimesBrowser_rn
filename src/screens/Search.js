import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { DatePicker } from "native-base";

import SearchCard from "../components/SearchCard";

export default class Search extends Component {
  static navigationOptions = {
    title: "Search Articles"
  };
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
    backgroundColor: "#000"
  }
});
