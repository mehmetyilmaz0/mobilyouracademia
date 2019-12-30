import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

import axios from 'axios';
import {API_BASE} from '../../constants';

export default class Detail extends Component {
    state= {
        title: '',
        favCount: '',
        displayCount: '',
        date: '',
        categoryName: '',
        loading: true
    };

    componentDidMount() {
        this.getArticle();
    };

    getArticle = () => {

        this.setState({
            loading: true
        });

        axios
            .get(`${API_BASE}/api/articles`)
            .then(article => article.data[0])
            .then(article => {
                this.setState({
                    title: article.title,
                    favCount: article.favCount,
                    displayCount: article.displayCount,
                    date: article.date,
                    categoryName: article.category.title,
                    loading: false
                })
            });
    };


    render() {

        const {title, favCount, displayCount, date, categoryName, loading} = this.state;

        return (
            <SafeAreaView>
                <View>
                    {
                        loading ? <Text>Loading..</Text> : <Text>{title} {favCount} {displayCount} {date} { categoryName}</Text>
                    }
                    <Button title={"get article"} onPress={this.getArticle}/>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
