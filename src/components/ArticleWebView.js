import React, { PureComponent } from "react";
import { WebView, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function ArticleWebView({ articleUrl }) {
  const url = articleUrl;
  return <WebView style={styles.root} source={{ uri: url }} />;
}

ArticleWebView.propTypes = {
  articleUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
