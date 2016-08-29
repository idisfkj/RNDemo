import React, {Component} from 'react';
import {WebView,Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';

const detailUrl = ['http://www.jxust.cn/view/15046'
      ,'http://www.jxust.cn/view/15484'
      ,'http://www.jxust.cn/view/15480'
      ,'http://www.jxust.cn/view/15478'
      ,'http://www.jxust.cn/view/15476'
      ,'http://www.jxust.cn/view/15470'];


export default class Detail extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', backgroundColor: 'royalblue'}}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Image source={require('../imgs/back.png')} style={styles.back}/>
          </TouchableOpacity>
          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20,color: 'white',marginVertical: 5}}>
              {this.props.route.title}
            </Text>
          </View>

        </View>
      <WebView
        source={{uri: detailUrl[this.props.route.number]}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        automaticallyAdjustContentInsets={false}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back: {
    margin: 5,
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
