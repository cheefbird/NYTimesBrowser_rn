import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class CategoryPicker extends Component {
  render() {
    return (
      <Picker
        note="Choose a news category"
        mode="dropdown"
        style={styles.picker}
        textStyle={styles.text}
        selectedValue="topStories"
        iosIcon={
          <MaterialIcons name="arrow-drop-down" size={24} style={styles.icon} />
        }
      >
        <Picker.Item label="All Top Stories" value="home" />
        <Picker.Item label="Politics" value="politics" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: undefined,
    height: 50
  },
  text: {
    fontWeight: "bold"
  },
  icon: {
    marginLeft: -17
  }
});
