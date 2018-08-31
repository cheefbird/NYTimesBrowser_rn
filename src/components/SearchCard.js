import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class SearchCard extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.prompt}>Search articles by keyword:</Text>
          <TextInput style={styles.searchBar} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
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
    backgroundColor: "#000"
  },
  inputContainer: {
    padding: 8
  },
  prompt: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#db8113"
  },
  searchBar: {
    borderColor: "#db8113",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 19,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#db8113"
  },
  button: {
    backgroundColor: "#db8113",
    color: "#000",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
