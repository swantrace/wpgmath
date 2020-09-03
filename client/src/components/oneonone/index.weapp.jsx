import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtToast } from "taro-ui";
import oneonone from "../../assets/images/one_on_one.png";
import "./oneonone.scss";

export default class OneOnOneButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  static externalClasses = ["oneonone-class"];

  handleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    return (
      <View
        className='one-on-one-button-wrapper'
        style={{ padding: "0 64rpx" }}
      >
        <Image
          mode='widthFix'
          src={oneonone}
          className={
            this.props.hasFooter
              ? "one-on-one-button"
              : "one-on-one-button-no-footer"
          }
          onClick={this.handleClick}
        />
        <AtToast
          isOpened={this.state.isOpened}
          text='点击右侧联系客服按钮，打开对话界面，发送“预约”，获取预约网页链接'
        ></AtToast>
      </View>
    );
  }
}
