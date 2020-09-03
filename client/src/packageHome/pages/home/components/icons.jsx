import Taro, { Component } from "@tarojs/taro";
import { View, Button, Image } from "@tarojs/components";
import { AtModal, AtModalHeader, AtModalContent } from "taro-ui";
import { connect } from "@tarojs/redux";
import IconFont from "../../../../components/iconfont";
import clockIcon from "../../../../assets/images/clock.png";
import "./icons.scss";

const iconSize = 90;
const iconInfos = [
  {
    icon: "custom-teacher",
    title: "优秀教师"
  },
  {
    icon: "activity",
    title: "学员活动"
  },
  {
    icon: "Share",
    title: "分享好友"
  },
  {
    icon: "video",
    title: "相关视频"
  },
  {
    icon: "shoucex",
    title: "手册下载"
  },
  {
    icon: "question",
    title: "常见问题"
  },
  {
    icon: "SCHEDULE",
    title: "上课时间"
  },
  {
    icon: "travelholidayvacat",
    title: "公共假期"
  }
];

@connect(state => {
  return {
    holidayClosures: state.branchInfo.holiday_closures,
    mathnasiumHours: state.branchInfo.mathnasium_hours
  };
}, null)
export default class Icons extends Component {
  state = {
    modalIsOpened: false,
    holidayOrClass: true,
    clicked: null
  };
  handleClick = goal => {
    this.setState({ clicked: goal });
    setTimeout(() => {
      this.setState({ clicked: null });
    }, 1000);
    switch (goal) {
      case "custom-teacher":
        Taro.redirectTo({ url: "/packageTeachers/pages/teachers/index" });
        break;
      case "activity":
        Taro.redirectTo({ url: "/packageStudents/pages/students/index" });
        break;
      case "Share":
        Taro.showShareMenu({ withShareTicket: true });
        break;
      case "video":
        Taro.redirectTo({ url: "/packageVideos/pages/videos/index" });
        break;
      case "shoucex":
        Taro.showLoading({ title: "下载中" });
        Taro.downloadFile({
          url:
            "https://6d61-mathnasium-jepku-1300955601.tcb.qcloud.la/New%20Brochure.pdf?sign=be5e0a22840d979574d4c01e087e1d1c&t=1599003156",
          success: function(res1) {
            if (res1.statusCode === 200) {
              Taro.openDocument({
                filePath: res1.tempFilePath,
                success: function(res2) {
                  Taro.hideLoading();
                  console.log(res2, "打开文档成功");
                }
              });
            } else {
              Taro.hideLoading();
            }
          },
          fail: function(err) {
            console.error(err);
            Taro.hideLoading();
          }
        });
        break;
      case "question":
        Taro.redirectTo({ url: "/packageQuestions/pages/questions/index" });
        break;
      case "SCHEDULE":
        this.setState({
          holidayOrClass: false,
          modalIsOpened: true
        });
        break;
      case "travelholidayvacat":
        this.setState({
          holidayOrClass: true,
          modalIsOpened: true
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View className='icons-wrapper at-row at-row--wrap at-row__justify--center at-row__align--center'>
        {iconInfos.map(iconInfo => (
          <View
            className='at-col at-col-3'
            key={iconInfo.icon}
            style={
              this.state.clicked == iconInfo.icon
                ? { backgroundColor: "#F1F1F1" }
                : {}
            }
          >
            <View className='icon-title-wrapper'>
              <Button
                onClick={() => {
                  this.handleClick(iconInfo.icon);
                }}
                className='btn-no-border'
                openType={iconInfo.icon === "Share" ? "share" : ""}
              >
                <IconFont name={iconInfo.icon} size={iconSize} />
              </Button>
              <View className='title'>{iconInfo.title}</View>
            </View>
          </View>
        ))}
        <AtModal isOpened={this.state.modalIsOpened}>
          <AtModalHeader style={{ backgroundColor: "red" }}>
            {this.state.holidayOrClass ? (
              <View className='modal-title-wrapper holiday-title-wrapper'>
                <Image
                  src={clockIcon}
                  mode='center'
                  style={{ width: "32px", height: "32px" }}
                />
                <View
                  style={{
                    margin: "0 auto",
                    position: "relative",
                    right: "30rpx"
                  }}
                >
                  假期关闭时间
                </View>
              </View>
            ) : (
              <View className='modal-title-wrapper classday-title-wrapper'>
                <Image
                  src={clockIcon}
                  mode='center'
                  style={{ width: "32px", height: "32px" }}
                />
                <View
                  style={{
                    margin: "0 auto",
                    position: "relative",
                    right: "30rpx"
                  }}
                >
                  上课时间
                </View>
              </View>
            )}
          </AtModalHeader>
          <AtModalContent>
            {this.state.holidayOrClass ? (
              <View className='holiday-schedule-wrapper'>
                {this.props.holidayClosures.map(holiday => (
                  <View
                    key={holiday.name}
                    className='holiday-item-wrapper'
                    style={{
                      fontSize: "0.9em",
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid grey",
                      flexWrap: "wrap"
                    }}
                  >
                    <View
                      className='holiday-name-wrapper'
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {holiday.name}
                    </View>
                    <View
                      className='holiday-date-wrapper'
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {holiday.time}
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View className='classday-schedule-wrapper'>
                {this.props.mathnasiumHours.map(classday => (
                  <View
                    key={classday.day}
                    className='classday-item-wrapper'
                    style={{
                      fontSize: "0.9em",
                      display: "flex",
                      justifyContent: "flex-start",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    <View
                      className='classday-name-wrapper'
                      style={{ paddingLeft: "40rpx", paddingRight: "20rpx" }}
                    >
                      {classday.day} :
                    </View>
                    <View className='classday-time-wrapper'>
                      {classday.time}
                    </View>
                  </View>
                ))}
              </View>
            )}
          </AtModalContent>
        </AtModal>
      </View>
    );
  }
}
