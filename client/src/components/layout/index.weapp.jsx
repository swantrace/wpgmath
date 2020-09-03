import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import TopLogo from "../toplogo/index.weapp";
import Header from "../header/index.weapp";
import CustomerServiceButton from "../customer-service-button/index.weapp";
// import OneOnOneButton from "../oneonone/index.weapp";
import Footer from "../footer/index.weapp";
import "./layout.scss";

export default class Layout extends Component {
  static externalClasses = ["page-class", "btn-no-border"];
  render() {
    return (
      <View className='page-class'>
        <TopLogo />
        <Header
          isHome={this.props.isHome}
          title={this.props.title}
          titleColor={this.props.titleColor}
          btn-no-border='btn-no-border'
          forHeader
        />
        <CustomerServiceButton />
        {this.props.children}
        <Footer current={this.props.currentTabNumber} />
      </View>
    );
  }
}
