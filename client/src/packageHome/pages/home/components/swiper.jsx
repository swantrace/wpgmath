import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./swiper.scss";

@connect(state => {
  return {
    pictures: state.branchInfo.pictures
  };
}, null)
export default class HomeSwiper extends Component {
  render() {
    return (
      <Swiper
        className='home-swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
        style={{ height: "40vw" }}
      >
        {this.props.pictures.map((picture, key) => (
          <SwiperItem key={picture}>
            <View className={`swipe-item-${key + 1}-wrapper`}>
              <Image src={picture} mode='widthFix' style={{ width: "100%" }} />
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}
