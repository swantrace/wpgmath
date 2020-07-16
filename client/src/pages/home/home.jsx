import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavigationBar from "../../components/navigationbar/navigationbar";
import "./home.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handlerGobackClick() {
    console.log("goback");
  }

  handlerGohomeClick() {
    console.log("gohome");
  }

  render() {
    return (
      <View className="index">
        <NavigationBar />
      </View>
    );
  }
}
