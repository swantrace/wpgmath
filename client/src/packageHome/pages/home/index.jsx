import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import HomeSwiper from "./components/swiper";
import Icons from "./components/icons";
import News from "./components/news";
import divider from "../../../assets/images/line.png";
import "./home.scss";

export default class Home extends Component {
  onShareAppMessage(res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "自定义转发标题",
      path: "/page/user?id=123"
    };
  }
  render() {
    return (
      <Layout page-class='home' currentTabNumber='0' isHome>
        <View className='main-content'>
          <HomeSwiper />
          <View className='divider-wrapper'>
            <Image src={divider} style={{ width: "100vw", height: "40rpx" }} />
          </View>
          <View className='icons-wrapper'>
            <Icons />
          </View>
          <View className='news-wrapper'>
            <News />
          </View>
        </View>
      </Layout>
    );
  }
}
