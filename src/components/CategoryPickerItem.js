import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";
import PropTypes from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class CategoryPickerItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker selectedValue={this.props.selectedCategory}>
          <Picker.Item label="All Top News" value="home" />
          <Picker.Item label="Politics" value="politics" />
        </Picker>
      </View>
    );
  }
}
