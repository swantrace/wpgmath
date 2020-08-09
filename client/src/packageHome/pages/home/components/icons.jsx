import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "../../../../components/iconfont";
import "./icons.scss";

export default function Icons() {
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
      title: "下课时间"
    }
  ];
  function handleClick(goal) {
    switch (goal) {
      case "custom-teacher":
        Taro.redirectTo({ url: "/packageTeachers/pages/teachers/index" });
        break;
      case "activity":
        Taro.redirectTo({ url: "/packageStudents/pages/students/index" });
        break;
      case "Share":
        break;
      case "video":
        Taro.redirectTo({ url: "/packageVideos/pages/videos/index" });
        break;
      case "shoucex":
        break;
      case "question":
        Taro.redirectTo({ url: "/packageQuestions/pages/questions/index" });
        break;
      case "SCHEDULE":
        break;
      case "travelholidayvacat":
        break;
      default:
        break;
    }
  }
  return (
    <View className='icons-wrapper at-row at-row--wrap at-row__justify--center at-row__align--center'>
      {iconInfos.map(iconInfo => (
        <View className='at-col at-col-3' key={iconInfo.icon}>
          <View
            className='icon-title-wrapper'
            onClick={() => {
              handleClick(iconInfo.icon);
            }}
          >
            <IconFont name={iconInfo.icon} size={iconSize} />
            <View className='title'>{iconInfo.title}</View>
          </View>
        </View>
      ))}
    </View>
  );
}
