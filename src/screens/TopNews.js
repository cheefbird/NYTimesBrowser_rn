import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { fetchTopNews } from "../actions";
import StandardArticle from "../components/StandardArticle";
// import FeaturedArticle from "../components/FeaturedArticle";

class TopNews extends PureComponent {
  UNSAFE_componentWillMount() {
    this.props.fetchTopNews();
  }

  // getThumbnailImageUrl = ()

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

    return (
      <TouchableOpacity>
        <View style={styles.listItem}>
          <StandardArticle
            title={item.title}
            subtitle={item.abstract}
            section={item.section}
            subsection={item.subsection}
            imageUri={thumbnailImageUrl}
          />
        </View>
      </TouchableOpacity>
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
    flex: 1,
    marginTop: 60,
    borderTopColor: "#f2f2f2",
    borderTopWidth: 1
  },
  listItem: {
    borderBottomColor: "#f2f2f2",
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
