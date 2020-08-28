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
      <View>
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
          text='发送booking给客服，获得链接'
        ></AtToast>
      </View>
    );
  }
}
