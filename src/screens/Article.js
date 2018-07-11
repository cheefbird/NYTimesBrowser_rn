import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import ArticleWebView from "../components/ArticleWebView";

export default class Article extends PureComponent {
  static navigationOptions = {
    title: "Article Detail"
  };
  render() {
    const url = this.props.navigation.getParam("url");
    return <ArticleWebView articleUrl={url} />;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
