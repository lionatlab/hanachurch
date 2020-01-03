import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../screens/HomeScreen'
import JoyChantScreen from '../screens/JoyChantScreen'
import ReactNativeYouTubeExample from '../screens/ReactNativeYouTubeExample'

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  JoyChant: JoyChantScreen
});

export default BottomTabNavigator;