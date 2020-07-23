import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavigationBar from "../../../components/navigationbar/index.weapp";
import Header from "../../../components/header/index.weapp";
import Footer from "../../../components/footer/index.weapp";
import "./contact.scss";

export default function Contact() {
  return (
    <View className="contact">
      <NavigationBar />
      <Header className="header" />
      <View className="main-content"></View>
      <Footer current={3} />
    </View>
  );
}
