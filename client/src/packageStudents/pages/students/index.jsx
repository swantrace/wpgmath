import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import TaroParser from "taro-parse";
import divider from "../../../assets/images/line.png";
import Layout from "../../../components/layout/index.weapp";
import "./students.scss";

const activitiesTopImage =
  "https://6d61-mathnasium-jepku-1300955601.tcb.qcloud.la/swwinnipeg/activities_background-min.jpg?sign=2a41c8c37d3765419cf6e7e40374367d&t=1598952735";
const activitiesBottomImage =
  "https://6d61-mathnasium-jepku-1300955601.tcb.qcloud.la/swwinnipeg/activities_bottom-min.png?sign=f383138b99515f5e2e1812579ffa06de&t=1598953377";

@connect(state => {
  return {
    activites: state.branchInfo.activities,
    activitesHeadImage: state.branchInfo.activities_head_image
  };
}, null)
export default class Students extends Component {
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: "A+美国数学教育培训",
      path: "/packageStudents/pages/students/index"
    };
  }
  render() {
    return (
      <Layout
        page-class='students'
        title='学员活动'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content-2'>
          <View className='header-image-wrapper'>
            <Image
              src={this.props.activitesHeadImage}
              mode='widthFix'
              style={{ width: "100vw" }}
            />
          </View>
          <View className='divider-wrapper'>
            <Image src={divider} style={{ width: "100vw", height: "40rpx" }} />
          </View>
          <View
            style={{
              backgroundImage: `url("${activitiesTopImage}")`,
              backgroundSize: "cover"
            }}
          >
            <TaroParser
              type='html'
              theme='light'
              onLoaded={() => {
                Taro.hideLoading();
              }}
              content={this.props.activites}
            />
            <Image
              src={activitiesBottomImage}
              mode='widthFix'
              style={{ width: "100vw", marginBottom: "20rpx" }}
            />
          </View>
        </View>
      </Layout>
    );
  }
}
