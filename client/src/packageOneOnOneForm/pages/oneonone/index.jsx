import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./oneonone.scss";

export default class History extends Component {
  render() {
    return (
      <Layout
        page-class='one-on-one-form'
        title='请联系我们免费申请入学前的一对一测评'
        titleColor='#DE1F26'
        btn-no-border='btn-no-border'
      >
        <View className='main-content'>One On One Form</View>
      </Layout>
    );
  }
}
