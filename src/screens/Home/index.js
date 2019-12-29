import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import HomeArticleList from './HomeArticleList';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item({ title }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default class Home extends Component {
  render() {
    return (
        <SafeAreaView>
            <FlatList
                data={[{key:'a'}, {key:'b'}]}
                renderItem={({ item }) => <HomeArticleList item={item} />}
            />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
