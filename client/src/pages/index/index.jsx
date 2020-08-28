import Taro, { useEffect, useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const [context, setContext] = useState({ ids: {} });
  useEffect(() => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.log("res", res);
        setContext({ ids: res.result });
      });
  }, []);
  return <View className='index'>{context.ids}</View>;
}
