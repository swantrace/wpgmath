import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <Layout
        page-class='contact'
        currentTabNumber='3'
        title='联系我们'
        btn-no-border='btn-no-border'
      >
        <View className='main-content'>contact</View>
      </Layout>
    );
  }
}
