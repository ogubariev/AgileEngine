import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

export default class StackOverflowScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsJSON: [],
      isLoading: true
    };
  }

  fetchQuestionsJSON() {
     var url = 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=30&order=desc&sort=activity&tagged=react-native&site=stackoverflow';
     fetch(url)
        .then( response => response.json() )
        .then( jsonData => {
          this.setState({
            isLoading: false,
            questionsJSON: [].concat(jsonData['items'])
          });
        })
        .catch( error => console.log('Fetch error ' + error) );
  }

  componentDidMount() {
	   this.fetchQuestionsJSON();
  }
  render() {
      var {isLoading} = this.state;
      if(isLoading)
        return this.renderLoadingMessage();
      else
        return this.renderResults();
    }

    renderLoadingMessage() {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            color={'#fff'}
            size={'large'}/>
          <Text style={styles.loadingTitle}>Loading</Text>
        </View>
      );
    }

    renderResults() {
      var {questionsJSON, isLoading} = this.state;
      if( !isLoading ) {
        return (
          <FlatList
            style={{ backgroundColor: 'white' }}
            data={questionsJSON}
            renderItem={({item, index}) => this.renderItem(item, index)}
            keyExtractor={this.keyExtractor}
            ListEmptyComponent={this.noItemDisplay}>
          </FlatList>
        );
      }
    }

    keyExtractor = (item, index) => {
      return index;
    };

    renderItem  = (item, index) => (
        <View style = {[styles.questionContainer, {backgroundColor: (index % 2 === 0) ? '#e0e0e0' : 'white'}]}>
          <Text style={styles.questionTitle}>
            {item.title}
          </Text>
        </View>
    );

    noItemDisplay = () => (
      <View  style={styles.container}>
        <Text>
          No items.
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8c8c8c'
    },
    loadingTitle: {
      color: '#fff',
      paddingLeft: 10,
    },
    questionContainer: {
      flexDirection: 'row',
      padding: 10
    },
    questionTitle: {
        color: 'black',
        flex: 1,
    },
});
