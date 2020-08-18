import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./students.scss";

export default class Students extends Component {
  render() {
    return (
      <Layout
        page-class='students'
        title='学员活动'
        btn-no-border='btn-no-border'
      >
        <View className='main-content-2'>students</View>
      </Layout>
    );
  }
}
