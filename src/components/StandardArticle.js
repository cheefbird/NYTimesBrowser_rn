import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function StandardArticle({
  title,
  subtitle,
  sectionText,
  onPress,
  imageUri
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: imageUri }} />
        <View style={styles.textContainer}>
          <Text style={styles.sectionText}>{sectionText}</Text>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

StandardArticle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  section: PropTypes.string,
  subsection: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  imageUri: PropTypes.string.isRequired
};

StandardArticle.defaultProps = {
  section: "",
  subsection: ""
};

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
    width: 75,
    height: 75
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  sectionText: {
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    alignSelf: "flex-start",
    paddingHorizontal: 2
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8
  }
});
