import { createStackNavigator } from "react-navigation";

import TopNews from "./screens/TopNews";
import Article from "./screens/Article";

export default createStackNavigator(
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
        backgroundColor: "#fcfcfc"
      },
      headerTintColor: "black",
      headerBackTitle: "Back"
    }
  }
);
