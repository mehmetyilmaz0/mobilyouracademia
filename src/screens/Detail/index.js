import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class Detail extends Component {

    static navigationOptions = ({navigation}) => {

        const article = navigation.getParam('article');
        return {
            title: article.title,
            content: article.content,
            keywords: article.keywords,
            source: article.source,
            user: article.user,
            date: article.date,
            favCount: article.favCount,
            displayCount: article.displayCount,
            categoryTitle: article.category.title,
            categoryContent: article.category.title,
            categoryDate: article.category.date,
        }
    };

    render() {
        return (
            <SafeAreaView>
                <Text>Detail</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
