import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function StandardArticle(
  {
    //   title,
    //   subtitle,
    //   section,
    //   subsection,
    //   imageUri
  }
) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://static01.nyt.com/images/2018/07/03/us/politics/03dc-scotus/03dc-scotus-superJumbo.jpg"
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.sectionText}>Subsection Text</Text>
        <Text style={styles.titleText}>
          Title Text will Go Here and It Just Might be Long
        </Text>
        <Text>
          This will be a subtitle, or abstract, which gives brief info. This
          will be a subtitle, or abstract, which gives brief info. This will be
          a subtitle, or abstract, which gives brief info.
        </Text>
      </View>
    </View>
  );
}

// StandardArticle.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   section: PropTypes.string,
//   subsection: PropTypes.string,
//   imageUri: PropTypes.string.isRequired
// };

// StandardArticle.defaultProps = {
//   section: "",
//   subsection: ""
// };

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 365,
    height: 243
  },
  textContainer: {
    flex: 1
  },
  sectionText: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 8
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8
  }
});
