import _ from "lodash";
import React, { PureComponent } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { connect } from "react-redux";

import { fetchTopNews } from "../actions";
import StandardArticle from "../components/StandardArticle";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryPickerItem from "../components/CategoryPickerItem";

class TopNews extends PureComponent {
  static navigationOptions = {
    title: "Top News"
  };

  UNSAFE_componentWillMount() {
    this.props.fetchTopNews();
  }

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

  renderCategoryPickerHeader = () => (
    <View style={styles.pickerContainer}>
      <Text style={styles.categoryPickerLabel}>Category: </Text>
      <CategoryPickerItem
        selectedCategory={this.props.selectedCategory}
        onValueChanged={this.handleCategoryChanged}
      />
    </View>
  );

  handleCategoryChanged = value => {
    this.props.fetchTopNews(value);
  };

  render() {
    return (
      <FlatList
        data={this.props.topNewsArticles}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={styles.list}
        ListHeaderComponent={this.renderCategoryPickerHeader}
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
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 1
  },
  categoryPickerLabel: {
    fontSize: 11,
    marginRight: -15
  }
});

const mapStateToProps = state => {
  const { articles, category } = state.topNewsArticles;
  const topNewsArticles = _.map(articles, val => {
    return { ...val };
  });

  const selectedCategory = category;

  return { topNewsArticles, selectedCategory };
};

export default connect(
  mapStateToProps,
  { fetchTopNews }
)(TopNews);
