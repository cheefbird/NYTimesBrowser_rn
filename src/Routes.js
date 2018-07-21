import React from "react";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TopNews from "./screens/TopNews";
import Article from "./screens/Article";
import MovieReviews from "./screens/MovieReviews";
import Search from "./screens/Search";

const TopNewsTab = createStackNavigator(
  {
    TopStories: {
      screen: TopNews
    },
    Detail: {
      screen: Article
    }
  },
  {
    initialRouteName: "TopStories",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back"
    }
  }
);

const MovieReviewsTab = createStackNavigator(
  {
    ReviewList: {
      screen: MovieReviews
    },
    Detail: {
      screen: Article
    }
  },
  {
    initialRouteName: "ReviewList",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back"
    }
  }
);

const SearchTab = createStackNavigator(
  {
    SearchScreen: {
      screen: Search
    }
  },
  {
    initialRouteName: "SearchScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back"
    }
  }
);

export default createTabNavigator(
  {
    TopNewsTab: {
      screen: TopNewsTab,
      navigationOptions: {
        tabBarLabel: "Top News",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="newspaper"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    MovieReviewsTab: {
      screen: MovieReviewsTab,
      navigationOptions: {
        tabBarLabel: "Movie Reviews",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="movie-roll"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="magnify" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "TopNewsTab",
    tabBarOptions: {
      activeTintColor: "#db8113",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#000"
      }
    }
  }
);
