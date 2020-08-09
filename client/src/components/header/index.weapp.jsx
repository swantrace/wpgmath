import Taro from "@tarojs/taro";
import { View, OpenData, Text, Button } from "@tarojs/components";
import IconFont from "../iconfont";
import BranchSelector from "../branch-selector/index.weapp";
import "./header.scss";

export default function Header({ isHome, title }) {
  const onGetBranch = e => {
    console.log("on get branch", e);
  };
  const goBackHome = () => {
    Taro.redirectTo({ url: "/packageHome/pages/home/index" });
  };
  return isHome ? (
    <View className='header-wrapper at-row at-row__justify--around at-row__align--center'>
      <IconFont name='location' size={34} className='at-col at-col-1' />
      <BranchSelector onGetBranch={onGetBranch} className='at-col-5' />
      <View className='at-col at-col-1 at-col__offset-5'>
        <View
          className='headView'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        >
          <OpenData type='userAvatarUrl' />
          <View
            className='icon'
            style={{
              position: "absolute",
              height: "96rpx",
              width: "96rpx",
              borderRadius: "50%",
              border: "18rpx solid #fff"
            }}
          ></View>
        </View>
      </View>
    </View>
  ) : (
    <View className='header-wrapper at-row at-row__justify--around at-row__align--center'>
      <Button onClick={goBackHome} style={{ padding: "0" }}>
        <IconFont name='back' size={34} className='at-col at-col-1' />
      </Button>
      <View className='at-col at-col-10' style={{ textAlign: "center" }}>
        <Text>{title}</Text>
      </View>
      <View className='at-col at-col-1'>
        <View
          className='headView'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        >
          <OpenData type='userAvatarUrl' />
          <View
            className='icon'
            style={{
              position: "absolute",
              height: "96rpx",
              width: "96rpx",
              borderRadius: "50%",
              border: "18rpx solid #fff"
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}
