import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./videos.scss";

export default class Videos extends Component {
  render() {
    return (
      <Layout page-class='video'>
        <View className='main-content-2'>videos</View>
      </Layout>
    );
  }
}
