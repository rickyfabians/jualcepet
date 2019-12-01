import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { LaunchScreen, Home } from '../Containers'

import styles from './Styles/NavigationStyles'
// Manifest of possible screens

const mainNav = createBottomTabNavigator({
  Home: { 
    screen: Home 
  },
  Maps: { 
    screen: Home 
  },
  LaunchScreen3: { 
    screen: LaunchScreen 
  },
  LaunchScreen4: { 
    screen: LaunchScreen 
  },
  },
  {
})

const PrimaryNav = createStackNavigator({
  mainNav: { 
    screen: Home 
  }
  }, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'mainNav',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
