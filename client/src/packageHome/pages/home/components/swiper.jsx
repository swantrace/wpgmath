import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import swipeItem1 from "../../../../assets/images/swipe_item1.png";
import swipeItem2 from "../../../../assets/images/swipe_item2.png";
import swipeItem3 from "../../../../assets/images/swipe_item3.png";
import "./swiper.scss";

export default function HomeSwiper() {
  return (
    <Swiper
      className='home-swiper'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots
      autoplay
    >
      <SwiperItem>
        <View className='swipe-item-1-wrapper'>
          <Image
            src={swipeItem1}
            mode='scaleToFill'
            style={{ width: "100%" }}
          />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className='swipe-item-2-wrapper'>
          <Image
            src={swipeItem2}
            mode='scaleToFill'
            style={{ width: "100%" }}
          />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className='swipe-item-3-wrapper'>
          <Image
            src={swipeItem3}
            mode='scaleToFill'
            style={{ width: "100%" }}
          />
        </View>
      </SwiperItem>
    </Swiper>
  );
}
