import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./questions.scss";

export default class Questions extends Component {
  render() {
    return (
      <Layout page-class='questions'>
        <View className='main-content-2'>questions</View>
      </Layout>
    );
  }
}