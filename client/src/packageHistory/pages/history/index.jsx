import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import TaroParser from "taro-parse";
import "taro-parse/dist/style/main.scss";
import Layout from "../../../components/layout/index.weapp";
import "./history.scss";

@connect(state => {
  return {
    history: state.branchInfo.history,
    historyHeadImage: state.branchInfo.history_head_image
  };
}, null)
export default class History extends Component {
  render() {
    return (
      <Layout
        page-class='history'
        currentTabNumber='2'
        title='学校历史'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content'>
          <View className='header-image-wrapper'>
            <Image
              src={this.props.historyHeadImage}
              mode='scaleToFill'
              style={{ width: "100%" }}
            />
          </View>
          <TaroParser
            type='html'
            theme='light'
            onLoaded={() => {
              Taro.hideLoading();
            }}
            content={this.props.history}
          />
        </View>
      </Layout>
    );
  }
}
