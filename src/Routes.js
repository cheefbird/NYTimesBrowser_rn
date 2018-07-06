// import React from "react";
import { createStackNavigator } from "react-navigation";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TopNews from "./screens/TopNews";

export default createStackNavigator(
  {
    TopNewsList: {
      screen: TopNews
    }
  },
  {
    initialRouteName: "TopNewsList"
  }
);
