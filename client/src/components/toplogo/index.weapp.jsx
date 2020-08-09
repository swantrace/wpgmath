import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import NavBar from "taro-navigationbar";
import topLogo from "../../assets/images/top_logo.jpg";
import "./toplogo.scss";

export default function TopLogo() {
  return (
    <NavBar
      renderLeft={
        <View className='top-logo-img-wrapper'>
          <Image src={topLogo} mode='widthFix' className='top-logo-img' />
        </View>
      }
    />
  );
}
