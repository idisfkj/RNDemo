'use strict';

import React,{Component} from 'react';
import {View,Text,ToastAndroid,StyleSheet,Image,ScrollView} from 'react-native';

import List from './List'

const HTTP_URL = 'http://apis.baidu.com/thinkpage/weather_api/suggestion';
const HTTP_ARG = 'location=beijing&language=zh-Hans&unit=c&start=0&days=3';
const APIKEY='62a5d760b5221826e1810ee76b96046f';

let obj= [{                         //返回指定days天数的结果
      "date": "2015-09-20",             //日期
      "text_day": "多云",               //白天天气现象文字
      "code_day": "4",                  //白天天气现象代码
      "text_night": "晴",               //晚间天气现象文字
      "code_night": "0",                //晚间天气现象代码
      "high": "26",                     //当天最高温度
      "low": "17",                      //当天最低温度
      "precip": "0",                    //降水概率，范围0~100，单位百分比
      "wind_direction": "",             //风向文字
      "wind_direction_degree": "255",   //风向角度，范围0~360
      "wind_speed": "9.66",             //风速，单位km/h（当unit=c时）、mph（当unit=f时）
      "wind_scale": ""                  //风力等级
    }, {
      "date": "2015-09-21",
      "text_day": "晴",
      "code_day": "0",
      "text_night": "晴",
      "code_night": "0",
      "high": "27",
      "low": "17",
      "precip": "0",
      "wind_direction": "",
      "wind_direction_degree": "157",
      "wind_speed": "17.7",
      "wind_scale": "3"
    }, {
      "date": "2015-09-21",
      "text_day": "晴",
      "code_day": "0",
      "text_night": "晴",
      "code_night": "0",
      "high": "27",
      "low": "17",
      "precip": "0",
      "wind_direction": "",
      "wind_direction_degree": "157",
      "wind_speed": "17.7",
      "wind_scale": "3"
    }];

export default class Weather extends Component{
  constructor(props){
    super(props);
    this.state={
      obj: obj
    };
  }

  getData(){
    return fetch(HTTP_URL+'?'+HTTP_ARG,{
      method: 'GET',
      headers: {
        'apikey': APIKEY,
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // ToastAndroid.show(responseJson.results[0].daily[0],ToastAndroid.SHORT);
        this.setState({obj:  responseJson.results[0].daily});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return(
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.city}>
              上海
            </Text>
            <Text style={styles.temperature}>
              {this.state.obj[0].low} ~ {this.state.obj[0].high}°C
            </Text>
            <Text style={styles.day}>
              {this.state.obj[0].text_day}
            </Text>
            <Text style={styles.wind}>
            风速：{this.state.obj[0].wind_speed}
            </Text>
          </View>

          <View style={styles.item}>
            <View style={styles.above}>
              <Text>
                今天
              </Text>
              <Text style={styles.right}>
                {this.state.obj[0].low}° | {this.state.obj[0].high}°
              </Text>
            </View>
            <View style={styles.above}>
              <Text>
                {this.state.obj[0].text_day}
              </Text>
              <Text style={styles.right}>
                风速：{this.state.obj[0].wind_speed}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.above}>
              <Text>
                明天
              </Text>
              <Text style={styles.right}>
                {this.state.obj[1].low}° | {this.state.obj[1].high}°
              </Text>
            </View>
            <View style={styles.above}>
              <Text>
                {this.state.obj[1].text_day}
              </Text>
              <Text style={styles.right}>
                风速：{this.state.obj[1].wind_speed}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.above}>
              <Text>
                后天
              </Text>
              <Text style={styles.right}>
                {this.state.obj[2].low}° | {this.state.obj[2].high}°
              </Text>
            </View>
            <View style={styles.above}>
              <Text>
                {this.state.obj[2].text_day}
              </Text>
              <Text style={styles.right}>
                风速：{this.state.obj[2].wind_speed}
              </Text>
            </View>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'cornflowerblue',
    height: 300,
  },
  city: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  temperature: {
    alignSelf: 'center',
    marginTop: 80,
    fontSize: 40,
    color: 'white',
  },
  day:{
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  wind: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
  },
  item: {
    margin: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  above:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    alignSelf: 'flex-end',
  },
});
