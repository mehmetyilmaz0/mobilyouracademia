import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Button} from 'react-native';

import HomeArticleList from './HomeArticleList';
import {Header, Content, List, Body, Title} from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Content>
                <List>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => <HomeArticleList item={item}/>}
                    />
                </List>
                <Button title={'go to detail'} onPress={() => this.props.navigation.navigate('Detail')}/>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: '#3c4245',
    },
});
