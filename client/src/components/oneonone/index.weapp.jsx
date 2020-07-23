import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import oneonone from "../../assets/images/one_on_one.png";
import "./oneonone.scss";

export default function OneOnOneButton() {
  return (
    <View>
      <Image mode='widthFix' src={oneonone} className='one-on-one-button' />
    </View>
  );
}
