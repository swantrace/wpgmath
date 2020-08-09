import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./teachers.scss";

export default class Teachers extends Component {
  render() {
    return (
      <Layout page-class='teachers' title='优秀教师团队'>
        <View className='main-content-2'>teachers</View>
      </Layout>
    );
  }
}
