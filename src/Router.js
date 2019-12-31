import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Authenticate Stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

// App Stack
import Home from './screens/Home';
import Category from './screens/Category';
import Random from './screens/Random';
import Popular from './screens/Popular';
import Detail from './screens/Detail';
import DrawerButton from './components/DrawerButton';

const AuthStack = createBottomTabNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({tintcolor}) => <Ionicons name='log-in' style={{color: tintcolor}}/>,
            },
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({tintcolor}) => <Ionicons name='person-add' style={{color: tintcolor}}/>,
            },
        },
    },
    {
        initialRouteName: 'SignIn',
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#586589',
            style: {
                backgroundColor: '#171f33',
            },
        },
    },
);

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> ({
            title: 'Yeniler',
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
    },
    Detail: {
        screen: Detail,
    },
});

const CategoryStack = createStackNavigator({
    Category: {
        screen: Category,
        navigationOptions: ({navigation})=> ({
            title: 'Kategoriler',
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
    },
});

const RandomStack = createStackNavigator({
    Random: {
        screen: Random,
        navigationOptions: ({navigation})=> ({
            title: 'Rastgele',
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
    },
});

const PopularStack = createStackNavigator({
    Popular: {
        screen: Popular,
        navigationOptions: ({navigation})=> ({
            title: 'Populer',
            headerLeft: <DrawerButton navigation={navigation}/>
        }),
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Yeniler',
                tabBarIcon: ({tintColor}) => (<Ionicons name="ios-wifi" size={22} color={tintColor}/>),
            },
        },
        Category: {
            screen: CategoryStack,
            navigationOptions: {
                tabBarLabel: 'Kategoriler',
                tabBarIcon: ({tintColor}) => (<Ionicons name="ios-copy" size={18} color={tintColor}/>),
            },
        },
        Random: {
            screen: RandomStack,
            navigationOptions: {
                tabBarLabel: 'Rastgele',
                tabBarIcon: ({tintColor}) => (<Ionicons name="ios-shuffle" size={22} color={tintColor}/>),
            },
        },
        Popular: {
            screen: PopularStack,
            navigationOptions: {
                tabBarLabel: 'Populer',
                tabBarIcon: ({tintColor}) => (<Ionicons name="ios-star" size={22} color={tintColor}/>),
            },
        },
    }
);

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                drawerLabel: 'Yeniler',
                drawerIcon: ({tintColor}) => (<Ionicons name="ios-wifi" size={18} color={tintColor}/>),
            },
        },
        Category: {
            screen: TabNavigator,
            navigationOptions: {
                drawerLabel: 'Kategoriler',
                drawerIcon: ({tintColor}) => (<Ionicons name="ios-copy" size={18} color={tintColor}/>),
            },
        },
        Random: {
            screen: TabNavigator,
            navigationOptions: {
                drawerLabel: 'Rastgele',
                drawerIcon: ({tintColor}) => (<Ionicons name="ios-shuffle" size={18} color={tintColor}/>),
            },
        },
        Popular: {
            screen: TabNavigator,
            navigationOptions: {
                drawerLabel: 'Populer',
                drawerIcon: ({tintColor}) => (<Ionicons name="ios-star" size={18} color={tintColor}/>),
            },
        },
    });

export default createAppContainer(DrawerNavigator);
