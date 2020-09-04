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
        style={{ padding: "28rpx 64rpx 0" }}
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
          text='点击右侧联系客服按钮，打开对话界面，发送“预约”这两个关键字，获取预约网页链接'
          image='https://6d61-mathnasium-jepku-1300955601.tcb.qcloud.la/yuyuescreenshot.jpg?sign=e87185b91ea4b48931906e6a9d03f717&t=1599183458'
          duration={4000}
        ></AtToast>
      </View>
    );
  }
}
