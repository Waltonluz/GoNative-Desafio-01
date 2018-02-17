import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';


export default class Post extends Component {
  render(){
    return (
    <View style={styles.boxList}>
      <Text style={styles.title}>{ this.props.data.title}</Text>
      <Text style={styles.autor}>{this.props.data.autor}</Text>
      <Text style={styles.descricao}>
      {this.props.data.descricao}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
boxList: {
  padding: 20,
  backgroundColor: '#FFF',
  borderRadius: 5,
  margin: 20,
},
title: {
 color: '#333333',
 fontSize: 16,
 fontWeight: 'bold',
},
autor: {
  color: '#999999',
  borderBottomWidth: 1,
  borderColor: '#EEEEEE',
  marginBottom: 5,
  paddingVertical: 5,
},
desricao:{
  color: '#666666'
},
});
