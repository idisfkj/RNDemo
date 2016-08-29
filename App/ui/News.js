'use strict';

import React,{Component} from 'react';
import {View} from 'react-native';

import List from './List'

export default class News extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <List {...this.props}/>
    );
  }
}
