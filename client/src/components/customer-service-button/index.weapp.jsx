import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import csb from "../../assets/images/customer_service_button.png";
import "./customer_service_button.scss";

export default function CustomerServiceButton() {
  return (
    <View>
      <Image mode='widthFix' src={csb} className='customer-service-button' />
    </View>
  );
}
