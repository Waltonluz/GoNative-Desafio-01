import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Post from 'components/Post'

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';



export default class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Diego Fernandes',
        descricao:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lacus porttitor, suscipit nisi et, fringilla orci.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Diego Fernandes',
        descricao:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lacus porttitor, suscipit nisi et, fringilla orci.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        autor: 'Walton V. Luz',
        descricao:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lacus porttitor, suscipit nisi et, fringilla orci.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        autor: 'Walton V. Luz',
        descricao:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lacus porttitor, suscipit nisi et, fringilla orci.',
      },
    ]
  };
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.topo}>
           <Text style={styles.textoTopo}>GoNative App</Text>
         </View>
         <ScrollView>
           {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(238, 119, 119)',
    margin: 0,
  },
  topo: {
    backgroundColor: '#FFFFFF',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTopo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
});
