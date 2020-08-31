import Taro, { useEffect, useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import BranchSelector from "../../components/branch-selector/index.weapp";

export default function Index() {
  const [branches, setBranches] = useState([]);
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
            setBranches(branchList.result);
          });
      }
    });
  }, []);
  return (
    <View className='index'>
      <BranchSelector branches={branches}></BranchSelector>
    </View>
  );
}
