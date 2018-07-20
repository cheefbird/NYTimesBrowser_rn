import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function MovieReview({
  title,
  subtitle,
  labelTitle,
  labelRating,
  onPress,
  imageUri
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: imageUri }} />
        <View style={styles.textContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelTitle}>{labelTitle}</Text>
            <Text style={styles.labelRating}>{labelRating}</Text>
          </View>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 1,
    padding: 8
  },
  thumbnail: {
    width: 105,
    height: 70
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  labelContainer: {
    flexDirection: "row",
    fontSize: 12,
    backgroundColor: "#000",
    alignSelf: "flex-start",
    paddingHorizontal: 5,
    paddingVertical: 4
  },
  labelTitle: {
    color: "#fff",
    fontWeight: "bold"
  },
  labelRating: {
    color: "red",
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8
  }
});
