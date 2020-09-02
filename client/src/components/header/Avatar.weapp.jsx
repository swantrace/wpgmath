import Taro from "@tarojs/taro";
import { View, OpenData } from "@tarojs/components";

export default function Avatar() {
  return (
    <View
      className='headView'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100%",
        width: "100%"
      }}
    >
      <OpenData
        type='userAvatarUrl'
        className='icon'
        mode='aspectFit'
        style={{
          position: "absolute",
          height: "30PX",
          width: "30PX",
          borderRadius: "50%",
          overflow: "hidden"
        }}
      />
    </View>
  );
}
