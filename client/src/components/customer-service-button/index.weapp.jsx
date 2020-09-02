import Taro from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import csb from "../../assets/images/customer_service_button.png";
import "./customer_service_button.scss";

export default function CustomerServiceButton() {
  return (
    <View>
      <Button
        openType='contact'
        style={{ padding: "0", height: "auto", backgroundColor: "#DE1F26" }}
      >
        <Image mode='widthFix' src={csb} className='customer-service-button' />
      </Button>
    </View>
  );
}
