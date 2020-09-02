import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import { connect } from "@tarojs/redux";
import divider from "../../../assets/images/line.png";
import Layout from "../../../components/layout/index.weapp";
import "./teachers.scss";

@connect(state => {
  return {
    teachers: state.branchInfo.teachers,
    onHire: state.branchInfo.on_hire
  };
}, null)
export default class Teachers extends Component {
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: "A+美国数学教育培训",
      path: "/packageTeachers/pages/teachers/index"
    };
  }
  render() {
    return (
      <Layout
        page-class='teachers'
        btn-no-border='btn-no-border'
        title='优秀教师团队'
        titleColor='#3567B0'
      >
        <View className='main-content-2'>
          <View className='teacher-list-wrapper'>
            {this.props.teachers.map((teacher, index) =>
              index % 2 == 0 ? (
                <View
                  key={teacher._id}
                  className='teacher-wrapper even-teacher-wrapper at-row at-row__align--center at-row__justify--center'
                >
                  <View
                    className='avatar-wrapper at-col at-col-5'
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <AtAvatar
                      circle
                      image={teacher.avatar}
                      size='large'
                    ></AtAvatar>
                  </View>
                  <View
                    className='introduction-wrapper at-col at-col-7'
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column"
                    }}
                  >
                    <View
                      className='position-name-wrapper'
                      style={{ textAlign: "center" }}
                    >
                      {teacher.position}: {teacher.name}
                    </View>
                    <View className='divider-wrapper'>
                      <Image
                        src={divider}
                        style={{ width: "100%", height: "20rpx" }}
                      />
                    </View>
                    <View
                      className='introduction'
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {teacher.introduction}
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  key={teacher._id}
                  className='teacher-wrapper odd-teacher-wrapper at-row at-row__align--center at-row__justify--center'
                >
                  <View
                    className='introduction-wrapper at-col-7'
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column"
                    }}
                  >
                    <View
                      className='position-name-wrapper'
                      style={{ textAlign: "center" }}
                    >
                      {teacher.position}: {teacher.name}
                    </View>
                    <View className='divider-wrapper'>
                      <Image
                        src={divider}
                        style={{ width: "100%", height: "20rpx" }}
                      />
                    </View>
                    <View
                      className='introduction'
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {teacher.introduction}
                    </View>
                  </View>
                  <View
                    className='avatar-wrapper at-col-5'
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <AtAvatar
                      circle
                      image={teacher.avatar}
                      size='large'
                    ></AtAvatar>
                  </View>
                </View>
              )
            )}
          </View>
          {this.props.onHire ? (
            <View className='on-hire-wrapper'>
              <View
                style={{
                  textAlign: "center",
                  fontSize: "26rpx",
                  lineHeight: "30rpx",
                  color: "#7B22EC",
                  paddingBottom: "20rpx"
                }}
              >
                我们开放优秀的工作机会
              </View>
              <View className='who-can-apply-wrapper at-row at-row__justify--center'>
                <View className='at-col at-col-4 who-can-apply'>
                  <Text className='who-can-apply-dot'>&bull;</Text>
                  在校大学生
                </View>
                <View className='at-col at-col-4 who-can-apply'>
                  <Text className='who-can-apply-dot'>&bull;</Text>
                  优秀的高中生
                </View>
                <View className='at-col at-col-4 who-can-apply'>
                  <Text className='who-can-apply-dot'>&bull;</Text>
                  退休教师
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </Layout>
    );
  }
}
