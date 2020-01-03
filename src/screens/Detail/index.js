import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.item = props.navigation.getParam('article');
    }

    render() {
        return (
            <SafeAreaView>
                <Text>{this.item.content}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
