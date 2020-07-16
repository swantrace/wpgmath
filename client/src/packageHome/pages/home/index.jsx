import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavigationBar from "../../../components/navigationbar/index.weapp";
import "./home.scss";

export default function Home() {
  return (
    <View className="home">
      <NavigationBar />
    </View>
  );
}
