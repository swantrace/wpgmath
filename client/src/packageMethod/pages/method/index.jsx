import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavigationBar from "../../../components/navigationbar/index.weapp";
import Header from "../../../components/header/index.weapp";
import Footer from "../../../components/footer/index.weapp";
import "./method.scss";
import { get as getGlobalData } from "../../../global_data";

export default function Method() {
  console.log(getGlobalData("test"));
  return (
    <View className='method'>
      <NavigationBar />
      <Header className='header' />
      <View className='main-content'></View>
      <Footer current={1} />
    </View>
  );
}
