import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import { fetchTopNews, setNewsCategory } from "../actions";
import StandardArticle from "../components/StandardArticle";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryPicker from "../components/CategoryPicker";

class TopNews extends PureComponent {
  static navigationOptions = {
    headerTitle: () => <CategoryPicker />
  };

  UNSAFE_componentWillMount() {
    this.props.fetchTopNews(this.props.selectedCategory);
  }

  setCategoryName = categoryName => {
    this.props.setNewsCategory(categoryName);
    this.props.fetchTopNews(this.props.selectedCategory);
  };

  createSectionText = (section, subsection) => {
    if (section === "U.S.") {
      section = "USA";
    }

    if (subsection === "") {
      return section;
    } else {
      return `${section}: ${subsection}`;
    }
  };

  createImageObject = mediaObject => {
    if (mediaObject.length > 0) {
      const thumbnailObject = mediaObject.find(
        object => object.format === "Standard Thumbnail"
      );

      const jumboImageObject = mediaObject.find(
        object => object.format === "superJumbo"
      );

      return { thumb: thumbnailObject.url, large: jumboImageObject.url };
    } else {
      return {
        thumb:
          "https://static01.nyt.com/images/2018/07/10/briefing/071018briefing-evening-promo1/071018briefing-evening-promo1-thumbStandard-v2.jpg",
        large:
          "https://static01.nyt.com/images/2018/07/02/briefing/03ambriefing-asia-SS-slide-4QC4/03ambriefing-asia-SS-slide-4QC4-thumbStandard.jpg"
      };
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    const { multimedia } = item;

    const imageObject = this.createImageObject(multimedia);

    const sectionText = this.createSectionText(item.section, item.subsection);
    const { navigation } = this.props;

    if (index == 0) {
      return (
        <FeaturedArticle
          title={item.title}
          subtitle={item.abstract}
          sectionText={sectionText}
          imageUri={imageObject.large}
          onPress={() =>
            navigation.push("Detail", {
              url: item.url
            })
          }
        />
      );
    }

    return (
      <StandardArticle
        title={item.title}
        subtitle={item.abstract}
        sectionText={sectionText}
        imageUri={imageObject.large}
        onPress={() =>
          navigation.push("Detail", {
            url: item.url,
            title: sectionText
          })
        }
      />
    );
  };

  render() {
    console.log(this.props);
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
    backgroundColor: "#fff"
  },
  listItem: {
    borderBottomColor: "#fcfcfc",
    borderBottomWidth: 1,
    flex: 1,
    padding: 8
  }
});

const mapStateToProps = state => {
  const topNewsArticles = _.map(state.topNews.articles, val => {
    return { ...val };
  });

  const selectedCategory = state.topNews.selectedCategory;

  return { topNewsArticles, selectedCategory };
};

export default connect(
  mapStateToProps,
  { fetchTopNews, setNewsCategory }
)(TopNews);
