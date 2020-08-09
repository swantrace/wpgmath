import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
import home from "../../assets/images/home.png";
import selectedHome from "../../assets/images/selected_home.png";
import history from "../../assets/images/history.png";
import selectedHistory from "../../assets/images/selected_history.png";
import contact from "../../assets/images/contact.png";
import selectedContact from "../../assets/images/selected_contact.png";
import teachInfo from "../../assets/images/teach-info.png";
import selectedTeachInfo from "../../assets/images/selected_teach-info.png";

import "./footer.scss";

export default function Footer(props) {
  const current = parseInt(props.current);
  function handleClick(goal) {
    if (current !== goal) {
      switch (goal) {
        case 0:
          Taro.navigateTo({ url: "/packageHome/pages/home/index" });
          break;
        case 1:
          Taro.navigateTo({ url: "/packageMethod/pages/method/index" });
          break;
        case 2:
          Taro.navigateTo({ url: "/packageHistory/pages/history/index" });
          break;
        case 3:
          Taro.navigateTo({ url: "/packageContact/pages/contact/index" });
          break;
        default:
          break;
      }
    }
  }
  return (
    <AtTabBar
      fixed
      color='#999'
      selectedColor='#3567B0'
      tabList={[
        {
          title: "首页",
          image: home,
          selectedImage: selectedHome
        },
        {
          title: "教学方法",
          image: teachInfo,
          selectedImage: selectedTeachInfo
        },
        {
          title: "学校历史",
          image: history,
          selectedImage: selectedHistory
        },
        {
          title: "联系我们",
          image: contact,
          selectedImage: selectedContact
        }
      ]}
      onClick={handleClick}
      current={current}
    />
  );
}
