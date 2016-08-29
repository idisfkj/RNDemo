/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  BackAndroid,
  StatusBar,
  Platform,
  View
} from 'react-native';

import Welcome from './App/ui/Welcome';
import {NaviGoBack} from './App/utils/BackUtil';

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios'? 20 : 25)

class RNHello extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.goBack = this.goBack.bind(this);
    BackAndroid.addEventListener('hardwareBackPress',this.goBack);
  }

  goBack(){
    return NaviGoBack(_navigator);
  }

  renderScene(route, navigator){
    _navigator = navigator;
    let DefaultComponet = route.component;
    return <DefaultComponet
      route = {route} navigator = {navigator}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor='cornflowerblue'
          style={{height: STATUS_BAR_HEIGHT}}/>
        <Navigator initialRoute={{title: '主页', component: Welcome}}
          configureScene={(route,routeStack) => Navigator.SceneConfigs.FloatFromLeft}
          renderScene={this.renderScene}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNHello', () => RNHello);
