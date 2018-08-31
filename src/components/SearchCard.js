import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { DatePicker } from "native-base";

export default class SearchCard extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Search articles by keyword:</Text>
          <TextInput style={styles.searchBar} />
        </View>
        <View>
          <DatePicker placeHolderText="Start Date" modalTransparent={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 3,
    alignSelf: "center",
    backgroundColor: "#fff"
  },
  inputContainer: {
    padding: 8
  },
  searchBar: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10
  }
});
