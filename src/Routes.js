import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TopNews from "./screens/TopNews";
import Article from "./screens/Article";
import MovieReviews from "./screens/MovieReviews";
import SearchScreen from "./screens/SearchScreen";
import Colors from "./Colors";

const NavBarStyle = {
  headerStyle: {
    backgroundColor: Colors.black
  },
  headerTintColor: Colors.orange,
  headerBackTitle: "Back",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

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
    navigationOptions: { ...NavBarStyle }
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
    navigationOptions: { ...NavBarStyle }
  }
);

const SearchTab = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Article Search"
      }
    }
  },
  {
    initialRouteName: "Search",
    navigationOptions: { ...NavBarStyle }
  }
);

export default createBottomTabNavigator(
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
          <MaterialCommunityIcons name="magnify" size={27} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "TopNewsTab",
    tabBarOptions: {
      activeTintColor: Colors.orange,
      inactiveTintColor: Colors.white,
      style: {
        backgroundColor: Colors.black
      }
    }
  }
);
