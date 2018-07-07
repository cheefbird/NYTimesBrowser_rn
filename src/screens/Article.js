import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import ArticleWebView from "../components/ArticleWebView";

export default class Article extends PureComponent {
  static navigationOptions = {
    title: this.props.getParam("title")
  };
  render() {
    return <ArticleWebView articleUrl={this.props.url} />;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
