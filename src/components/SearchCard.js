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
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  handleSearch = () => {
    const message =
      this.state.searchText.length > 0
        ? `You searched for "${this.state.searchText}"`
        : "You didn't enter any search terms.";

    Alert.alert("Search Tapped", message, [
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
          <TextInput
            placeholder="Search keywords ..."
            placeholderTextColor={Colors.darkOrange}
            style={styles.searchBar}
            clearTextOnFocus={true}
            keyboardAppearance="dark"
            returnKeyType="search"
            onChangeText={text => this.setState({ searchText: text })}
            value={this.state.searchText}
            enablesReturnKeyAutomatically={true}
            onSubmitEditing={() => this.props.handler(this.state.searchText)}
          />
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
