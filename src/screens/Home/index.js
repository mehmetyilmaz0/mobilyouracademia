import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Button, Text} from 'react-native';

import ArticlesList from '../../components/ArticlesList';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <ArticlesList navigation={this.props.navigation}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: '#3c4245',
    },
});
