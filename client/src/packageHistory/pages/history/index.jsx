import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./history.scss";

export default class History extends Component {
  render() {
    return (
      <Layout page-class='history' currentTabNumber='2'>
        <View className='main-content'>history</View>
      </Layout>
    );
  }
}
