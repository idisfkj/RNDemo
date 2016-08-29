'use strict';

import React, {Component} from 'react';
import {
  Image,
  View,
  Dimensions,
  InteractionManager
  } from 'react-native';

import Main from './Main';

var {height,width} = Dimensions.get('window');

export default class Welcome extends Component{
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Image style={{flex: 1, width: width,height: height}}
          source={require('../imgs/welcome.png')}/>
      </View>
    );
  }

  componentDidMount(){
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        //重新设置导航堆栈
        navigator.resetTo({
          component: Main,
          title: '主页',
        });
      });
    }, 3000);
  }

}
