import React, {Component} from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Detail from './Detail';

const title=['中央电视台等主流媒体近期热评我校教育教学工作','我校承办中国物理学会第二十一届全国静电学术会议'
      ,'我校召开本科教学工作审核评估专题报告会','我校学子在亚洲攀岩锦标赛中勇夺冠军'
      ,'校党委书记罗嗣海、校长杨斌一行赴珠海格力股份有限公司调研','校党委书记罗嗣海、校长杨斌率团赴河源市开展考察调研活动'];
const fb=['党委宣传部','党委宣传部','党委宣传部','党委宣传部','党委宣传部','党委宣传部'];
const data=['2016-06-23',' 2016-08-17','2016-08-17','2016-08-17','2016-08-17',' 2016-08-15'];
const image=['http://www.jxust.cn/html/photo/2016/1466675672346.jpg'
      ,'http://www.jxust.cn/html/photo/2016/1471504109419.jpg'
      ,'http://www.jxust.cn/html/photo/2016/1471504166937.jpg'
      ,'http://www.jxust.cn/html/photo/2016/1471434223590.jpg'
      ,'http://www.jxust.cn/html/photo/2016/1471412907724.jpg'
      ,'http://www.jxust.cn/html/photo/2016/1471257439402.jpg'];

export default class List extends Component {
  static propTypes = {
  //  title: React.PropTypes.string.isRequired,
  //  number: React.PropTypes.number.isRequired,
  //  onForward: React.PropTypes.func.isRequired,
  //  onBack: React.PropTypes.func.isRequired,
 }
  constructor(props){
    super(props);
    const listView = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1!==r2});
    this.state={
      dataSource: listView.cloneWithRows(this._rowData())};
  }

  _rowData(){
    let obj=[];
    for (var i = 0; i < title.length; i++) {
      let entity ={
        title: title[i],
        fb: fb[i],
        data: data[i],
        image: image[i],
      };
      obj.push(entity);
    }
    return obj;
  }

  _onPress(rowID,rowData,sectionID,highlightRow){
    console.log("onPress!");
    alert(rowID+rowData.title+sectionID+"   "+highlightRow);
  }

  _renderRow(rowData,sectionID,rowID,highlightRow){
    return(
    <TouchableOpacity onPress={() => this.props.navigator.push({
        title: '详情',
        component: Detail,
        number: rowID,
      })}>
      <View style={styles.item}>
        <View style={styles.content}>
          <Text style={styles.des}>
            {rowData.title}
          </Text>
          <View style={styles.bottom}>
            <Text style={styles.fb}>
              {"发布: "+rowData.fb}
            </Text>
            <Text style={styles.data}>
              {"日期: "+rowData.data}
            </Text>
          </View>
        </View>
        <Image style={styles.image}
        source={{uri: rowData.image}}/>
      </View>
    </TouchableOpacity>
    );
  }

  render() {
    return (
          <View style={{flex: 1}}>
            <View style={styles.title}>
              <Text style={{fontSize: 20,color: 'white',marginVertical: 5}}>
                {this.props.route.title}
              </Text>
            </View>

            <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}/>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  top: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  back: {
    margin: 10,
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  content: {
    flex: 1,
    margin: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  bottom: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fb: {
    justifyContent: 'flex-start',
    fontSize: 15,
    color: 'gray',
  },
  data: {
    justifyContent: 'flex-end',
    fontSize: 15,
    color: 'gray',
  },
  des: {
    fontSize: 20,
    color: 'dimgray',
  },
  image: {
    margin: 10,
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
  },
});
