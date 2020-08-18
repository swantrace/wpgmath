import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./videos.scss";

export default class Videos extends Component {
  render() {
    return (
      <Layout page-class='video' title='相关视频' btn-no-border='btn-no-border'>
        <View className='main-content-2'>videos</View>
      </Layout>
    );
  }
}
