/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {Container, Header} from 'native-base';
import {Provider} from 'mobx-react';
import store from './src/store';

import Router from './src/Router';

export default class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <Router/>
            </Provider>
        );
    }
};
