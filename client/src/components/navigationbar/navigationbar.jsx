import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import NavBar from "taro-navigationbar";
import navigationBar from "../../assets/images/navigation_bar.jpg";
import "./navigationbar.scss";

export default function NavigationBar() {
  return (
    <NavBar
      renderLeft={
        <View className="navigation-bar-img-wrapper">
          <Image
            src={navigationBar}
            mode="aspectFit"
            className="navigation-bar-img"
          />
        </View>
      }
    />
  );
}
