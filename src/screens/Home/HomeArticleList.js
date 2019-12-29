import React from 'react';
import {Text} from 'react-native';
import {ListItem, Left, Right, Icon} from 'native-base'

const HomeArticleList = ({item}) => {
    return (
        <ListItem noIndent onPress={() => {}}>
            <Left>
                <Text>{item.key}</Text>
            </Left>
            <Right>
                <Icon name='arrow-forward'/>
            </Right>
        </ListItem>
    );
};


export default HomeArticleList;
