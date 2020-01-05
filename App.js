import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./Screens/HomeScreen";
import ImageScreen from "./Screens/ImageScreen";
import React from "react";

const AppNavigator  = createStackNavigator({
    Home: {screen: HomeScreen},
    Image: {screen: ImageScreen},
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
