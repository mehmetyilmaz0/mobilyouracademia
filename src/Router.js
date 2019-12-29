import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base'

// Authenticate Stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

// App Stack
import Home from './screens/Home';
import Category from './screens/Category';
import Random from './screens/Random';
import Popular from './screens/Popular';

const AuthStack = createBottomTabNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({tintcolor}) => <Icon name='log-in' style={{color: tintcolor}}/>
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({tintcolor}) => <Icon name='person-add' style={{color: tintcolor}}/>
            }
        }
    },
    {
        initialRouteName: 'SignIn',
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#586589',
            style:{
                backgroundColor : '#171f33'
            }
        }
    },
);

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Yeniler',
          tabBarIcon: ({tintColor}) => (<Icon name="ios-wifi" size={22} color={tintColor}/>),
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        tabBarLabel: 'Kategoriler',
          tabBarIcon: ({tintColor}) => (<Icon name="ios-copy" size={18} color={tintColor}/>),
      },
    },
    Random: {
      screen: Random,
      navigationOptions: {
        tabBarLabel: 'Rastgele',
          tabBarIcon: ({tintColor}) => (<Icon name="ios-shuffle" size={22} color={tintColor}/>),
      },
    },
    Popular: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: 'Populer',
          tabBarIcon: ({tintColor}) => (<Icon name="ios-star" size={22} color={tintColor}/>),
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AuthStack);
