import React from "react";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TopNews from "./screens/TopNews";
import Article from "./screens/Article";
import MovieReviews from "./screens/MovieReviews";

const TopNewsStack = createStackNavigator(
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
        backgroundColor: "#fff"
      },
      headerTintColor: "black",
      headerBackTitle: "Back",
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName;

        iconName = focused ? "newspaper" : "newspaper-outline";

        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    }
  }
);

const MovieReviewsStack = createStackNavigator(
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
        backgroundColor: "#fff"
      },
      headerTintColor: "black",
      headerBackTitle: "Back",
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName;

        iconName = focused ? "movie-roll" : "movie-roll-outline";

        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    }
  }
);

export default createTabNavigator(
  {
    TopNewsStack,
    MovieReviewsStack
  },
  {
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "black"
    }
  }
);
