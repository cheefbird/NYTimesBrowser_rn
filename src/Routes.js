import { createStackNavigator, createTabNavigator } from "react-navigation";

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
      headerBackTitle: "Back"
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
      headerBackTitle: "Back"
    }
  }
);

export default createTabNavigator({
  TopNewsStack,
  MovieReviewsStack
});
