import React, { PureComponent } from "react";
import { WebView, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function ArticleWebView({ articleUrl }) {
  return <WebView style={styles.root} source={{ uri: articleUrl }} />;
}

ArticleWebView.propTypes = {
  articleUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
