/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Container, Header} from 'native-base';

import Router from './src/Router';

const App: () => React$Node = () => {
  return (

        <Container>
          <Router />
        </Container>

  );
};

export default App;
