import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <Layout page-class='contact' currentTabNumber='3'>
        <View className='main-content'>contact</View>
      </Layout>
    );
  }
}
