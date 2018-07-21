import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { DatePicker } from "native-base";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Search articles by keyword:</Text>
          <TextInput />
        </View>
        <View>
          <DatePicker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    padding: 8
  }
});
