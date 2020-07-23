import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import "./news.scss";

export default function News() {
  const news = [
    "我们免费对您的孩子进行数学测试，并进一步根据你们孩子的情况来为Ta 辅导。",
    "当我们确认您孩子的情况（等级），我们将为他提供一次免费授课。",
    "我们会在12月24、25、26、31和1月1号，为庆祝圣诞节和新年休假（closed）。"
  ];
  return (
    <View class='news-board'>
      <View class='news-title'>
        <Text>最新动态</Text>
      </View>
      <View class='news-content'>
        <Swiper
          className='news-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical
          circular
          autoplay
        >
          {news.map((text, index) => (
            <SwiperItem key={text}>
              <View className={`news-${index}`}>{text}</View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    </View>
  );
}
