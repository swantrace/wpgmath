import Taro from "@tarojs/taro";
import { AtNavBar } from "taro-ui";
import "./header.scss";

export default function Header() {
  function handleClick(e) {
    console.log(e);
  }
  return (
    <AtNavBar
      onClickRgIconSt={handleClick}
      onClickRgIconNd={handleClick}
      onClickLeftIcon={handleClick}
      color='#000'
      title='NavBar 导航栏示例'
      leftText='返回'
      rightFirstIconType='user'
    />
  );
}
