/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

export default class siteReservation_RN extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>

        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source= {{uri: movie.posters.thumbnail}}
               style={{width: 150, height: 70}}></Image>
      </View>
    );
  }
}

AppRegistry.registerComponent('siteReservation_RN', () => siteReservation_RN);
