import Taro, { useEffect, useState } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
// import IconFont from "../../components/iconfont";
// import { useSelector } from "@tarojs/redux";
import indexTopImage from "../../assets/images/start_top.jpg";
import indexBottomImage from "../../assets/images/start_bottom.png";
import "./index.scss";
import BranchSelector from "../../components/branch-selector/index.weapp";

export default function Index() {
  const [branches, setBranches] = useState([]);
  // const indexTopImage = useSelector(state => state.branchInfo.index_top_image);
  // const indexBottomImage = useSelector(
  //   state => state.branchInfo.index_bottom_image
  // );
  useEffect(() => {
    Taro.getLocation({
      success: function(res) {
        Taro.cloud
          .callFunction({
            name: "getBranchList",
            data: {
              latitude: res.latitude,
              longitude: res.longitude
            }
          })
          .then(branchList => {
            console.log(branchList.result);
            setBranches(branchList.result);
          });
      }
    });
  }, []);

  return (
    <View
      className='index'
      style={{
        height: "100vh"
      }}
    >
      <View
        className='branch-selector-wrapper'
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          backgroundImage: `url("${indexTopImage}")`,
          backgroundSize: "cover"
        }}
      >
        <BranchSelector branches={branches}></BranchSelector>
      </View>
      <Image
        src={indexBottomImage}
        mode='scaleToFill'
        style={{ position: "absolute", bottom: "0", width: "100vw" }}
      />
    </View>
  );
}
