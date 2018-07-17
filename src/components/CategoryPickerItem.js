import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "native-base";
import PropTypes from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class CategoryPickerItem extends Component {
  render() {
    return (
      <Picker
        mode="dropdown"
        selectedValue={this.props.selectedCategory}
        iosIcon={
          <MaterialIcons name="arrow-drop-down" size={24} style={styles.icon} />
        }
        iosHeader="Choose a Category"
        style={styles.picker}
        textStyle={styles.pickerLabel}
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
    alignItems: "center"
  },
  pickerLabel: {
    fontWeight: "bold",
    alignSelf: "center"
  },
  icon: {
    marginLeft: -17
  }
});
