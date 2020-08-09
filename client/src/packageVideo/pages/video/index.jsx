import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./video.scss";

export default class VideoItem extends Component {
  render() {
    return (
      <Layout page-class='video'>
        <View className='main-content-2'>VideoItem</View>
      </Layout>
    );
  }
}
