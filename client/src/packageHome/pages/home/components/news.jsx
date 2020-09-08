import Taro, { Component } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import TaroParser from "taro-parse";
import { connect } from "@tarojs/redux";
import "./news.scss";

@connect(state => {
  return {
    notices: state.branchInfo.notices
  };
}, null)
export default class News extends Component {
  render() {
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
            {this.props.notices.reverse().map((text, index) => (
              <SwiperItem key={text}>
                <View className={`news-${index}`}>
                  <TaroParser
                    type='html'
                    theme='light'
                    onLoaded={() => {
                      Taro.hideLoading();
                    }}
                    customClass='infoBox'
                    content={text}
                  />
                </View>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}
