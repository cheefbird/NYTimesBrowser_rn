import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { fetchTopNews } from "../actions";
import StandardArticle from "../components/StandardArticle";
// import FeaturedArticle from "../components/FeaturedArticle";

class TopNews extends PureComponent {
  static navigationOptions = {
    title: "Top Stories"
  };

  UNSAFE_componentWillMount() {
    this.props.fetchTopNews();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { multimedia } = item;
    let thumbnailImageUrl;

    if (multimedia.length > 0) {
      const thumbnailObject = multimedia.find(
        object => object.format === "Standard Thumbnail"
      );
      const { url } = thumbnailObject;

      thumbnailImageUrl = url;
    } else {
      thumbnailImageUrl =
        "https://static01.nyt.com/images/2018/07/02/briefing/03ambriefing-asia-SS-slide-4QC4/03ambriefing-asia-SS-slide-4QC4-thumbStandard.jpg";
    }

    const { navigation } = this.props;

    return (
      <StandardArticle
        title={item.title}
        subtitle={item.abstract}
        section={item.section}
        subsection={item.subsection}
        imageUri={thumbnailImageUrl}
        onPress={() =>
          navigation.push("Detail", {
            url: item.url
          })
        }
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.topNewsArticles}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  listItem: {
    borderBottomColor: "#fcfcfc",
    borderBottomWidth: 1,
    flex: 1,
    padding: 8
  }
});

const mapStateToProps = state => {
  const topNewsArticles = _.map(state.topNewsArticles, val => {
    return { ...val };
  });

  return { topNewsArticles };
};

export default connect(
  mapStateToProps,
  { fetchTopNews }
)(TopNews);
