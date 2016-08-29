'use strict';

import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import News from './News';
import Weather from './Weather';


export default class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'news'
    };
  }

  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          title="新闻"
          selected={this.state.selectedTab==='news'}
          selectedTitleStyle={styles.selectedText}
          titleStyle={styles.text}
          renderIcon={() => <Image source={require('../imgs/ic_news.png')} style={styles.image}/>}
          renderSelectedIcon={() => <Image source={require('../imgs/ic_news_pressed.png')} style={styles.image}/>}
          onPress={() => this.setState({selectedTab: 'news'})}>
          <News {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="天气"
          selected={this.state.selectedTab==='weather'}
          selectedTitleStyle={styles.selectedText}
          titleStyle={styles.Text}
          renderIcon={() => <Image source={require('../imgs/ic_weather.png')} style={styles.image}/>}
          renderSelectedIcon={() => <Image source={require('../imgs/ic_weather_pressed.png')} style={styles.image}/>}
          onPress={() => this.setState({selectedTab: 'weather'})}>
          <Weather {...this.props}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#999',
  },
  selectedText: {
    color: 'darkorchid',
  },
  image: {
    width: 25,
    height: 25,
  },
});
