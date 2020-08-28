import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtDivider } from "taro-ui";
import Layout from "../../../components/layout/index.weapp";
import "./videos.scss";

export default class Videos extends Component {
  videoInfo = [
    {
      _id: "6518b7395f3f00f1000721604f0b7a0b",
      screenshot:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/swwinnipeg/screenshot1.jpg",
      video:
        "cloud://mathnasium-cloud-w47n8.6d61-mathnasium-cloud-w47n8-1300515994/swwinnipeg/Colombia - 24746.mp4",
      name: "卡通短片1"
    },
    {
      _id: "b5416b755f3f012e000888fa461b2042",
      screenshot:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/swwinnipeg/screenshot2.jpg",
      video:
        "cloud://mathnasium-cloud-w47n8.6d61-mathnasium-cloud-w47n8-1300515994/swwinnipeg/Fall - 28746.mp4",
      name: "卡通短片2"
    },
    {
      _id: "b5416b755f3f017f00088c1307545109",
      screenshot:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/swwinnipeg/screenshot3.jpg",
      video:
        "cloud://mathnasium-cloud-w47n8.6d61-mathnasium-cloud-w47n8-1300515994/swwinnipeg/Ferris Wheel - 27057.mp4",
      name: "卡通短片3"
    }
  ];
  render() {
    return (
      <Layout
        page-class='video'
        title='相关视频'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content-2'>
          <View className='videos-list-wrapper'>
            {this.videoInfo.map(video => (
              <View key={video.name} className='video-item-wrapper'>
                <View className='video-screenshot-wrapper'>
                  <Image
                    src={video.screenshot}
                    mode='aspectFill'
                    className='taro-img__mode-aspectfill'
                  />
                </View>
                <View className='video-name-wrapper'>
                  <AtDivider content={video.name} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </Layout>
    );
  }
}
