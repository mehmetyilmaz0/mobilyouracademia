import React, {Component} from 'react';
import {StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';
import { API_BASE } from '../constants';
import {View, Card, Text} from 'react-native-ui-lib';


export default class ArticlesList extends Component {

    state = {
        searchText: '',
        articles: [],
        allArticles: [],
        loading: true,
        articlesCount: 15,
        _refreshing: false
    };

    componentDidMount() {
        this._getArticles();
    }

    constructor() {
        super();
        this._duringMomentum = false;
    }


    render() {
        return (
            <FlatList
                ListFooterComponent={this._renderFooter}
                ListHeaderComponent={this._renderHeader()}
                data={this.state.articles}
                renderItem={this._renderArticlesItem}
                keyExtractor={(item) => item._id}
                onEndReached={this._loadMoreArticle}
                onEndReachedThreshold={0.5}
                refreshing={this.state._refreshing}
                onRefresh={this._onRefresh}
            />

        );
    }


    _renderArticlesItem = ({item, index}) => {
        return(
            // <TouchableOpacity
            //     onPress={() => {this._gotoDetail(item)}}
            //     style={styles.itemContainer}>
                    <ScrollView>
                        <View>
                            <Card row height={120} style={{marginBottom: 10}} onPress={() => {this._gotoDetail(item)}} br10>
                                <View padding-20 flex>
                                    <Text text70 dark10>
                                        {item.title}
                                    </Text>
                                    <Text text90 dark50 padding-40>
                                        {item.content.substring(0, 100)}...
                                    </Text>
                                </View>
                                <Card.Image width={115} imageSource={{ uri: item.imageUrl }}/>
                            </Card>
                        </View>
                    </ScrollView>
            // </TouchableOpacity>
        )
    };

    _renderHeader = () => {
        const {searchText} = this.state;
        return(
            <View style={styles.searchContainer}>
                <TextInput
                    onFocus={() => this._duringMomentum = true}
                    onBlur={() => this._duringMomentum = false}
                    onChangeText={searchText => {
                        this.setState({
                            searchText: searchText
                        });

                        this._searchFilter(searchText);
                    }}
                    value={searchText}
                    placeholder = "Search..."
                    style={styles.searchInput}/>
            </View>
        )
    };

    _searchFilter = (searchText) => {

        const newDataList = this.state.allArticles.filter(item => {
            const itemTitle = `${item.title.toLowerCase()}`;

            return itemTitle.indexOf(searchText.toLowerCase()) > -1;
        });

        this.setState({
            articles: newDataList,
        })
    };

    _getArticles = async () => {

        this.setState({
            loading: true,
        });

        const {data} = await axios.get(`${API_BASE}/api/articles/results/${this.state.articlesCount}`);

        this.setState({
            articles: data,
            allArticles: data,
            loading: false,
            _refreshing: false
        });
    };

    _renderFooter = () => {

        if(!this.state.loading) return null;
        return(
            <View style={styles.footerContainer}>
                <ActivityIndicator size="large"/>
            </View>
        )
    };

    _loadMoreArticle = () => {
        if(!this._duringMomentum){
            this.setState({
                articlesCount: this.state.articlesCount + 5,
            }, () => {
                this._getArticles();
            });
            this._duringMomentum = false;
        }
    };

    _onRefresh = () => {
        this.setState({
            articlesCount: 10,
            _refreshing: true,
        }, () => {
            this._getArticles();
        });
    };

    _gotoDetail = (article) => {
        this.props.navigation.navigate('Detail', {
            article: article,
        });
    };
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    name: {
        fontSize: 16
    },
    searchContainer: {
        padding: 10
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10
    },
    footerContainer: {
        paddingVertical: 20
    }
});
