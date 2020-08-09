import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./method.scss";

export default class Method extends Component {
  render() {
    return (
      <Layout page-class='method' currentTabNumber='1'>
        <View className='main-content'>method</View>
      </Layout>
    );
  }
}
