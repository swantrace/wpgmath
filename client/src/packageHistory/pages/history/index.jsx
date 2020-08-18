import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./history.scss";

export default class History extends Component {
  render() {
    return (
      <Layout
        page-class='history'
        currentTabNumber='2'
        title='学校历史'
        btn-no-border='btn-no-border'
      >
        <View className='main-content'>history</View>
      </Layout>
    );
  }
}
