import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import Colors from "../Colors";

export default class SearchCard extends PureComponent {
  handleSearch = () => {
    Alert.alert("Search Tapped", "You tapped the Search button!", [
      {
        text: "Dismiss",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.prompt}>Search articles by keyword:</Text>
          <TextInput style={styles.searchBar} />
          <TouchableOpacity style={styles.button} onPress={this.handleSearch}>
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
    color: Colors.orange
  },
  searchBar: {
    borderColor: Colors.orange,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 19,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: Colors.orange
  },
  button: {
    backgroundColor: Colors.orange,
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
