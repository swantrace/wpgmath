import Taro, { Component } from "@tarojs/taro";
import Index from "./packageIndex/pages/index/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentWillMount() {
    console.log(this.$router.params);
  }

  componentDidMount() {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({
        env: "mathnasium-jepku",
        traceUser: true
      });
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    entryPagePath: "packageHome/pages/home/index",
    debug: true,
    subPackages: [
      {
        root: "packageHome",
        name: "home_page",
        pages: ["pages/home/index"]
      },
      {
        root: "packageTeachers",
        name: "teachers_page",
        pages: ["pages/teachers/index"]
      },
      {
        root: "packageStudents",
        name: "students_page",
        pages: ["pages/students/index"]
      },
      {
        root: "packageQuestions",
        name: "questions_page",
        pages: ["pages/questions/index"]
      },
      {
        root: "packageVideos",
        name: "videos_page",
        pages: ["pages/videos/index"]
      },
      {
        root: "packageVideo",
        name: "video_page",
        pages: ["pages/video/index"]
      },
      {
        root: "packageMethod",
        name: "method_page",
        pages: ["pages/method/index"]
      },
      {
        root: "packageContact",
        name: "contact_page",
        pages: ["pages/contact/index"]
      },
      {
        root: "packageHistory",
        name: "history_page",
        pages: ["pages/history/index"]
      }
    ],
    plugins: {},
    preloadRule: {
      "packageHome/pages/home/index": {
        network: "all",
        packages: [
          "teachers_page",
          "students_page",
          "questions_page",
          "videos_page",
          "method_page",
          "contact_page",
          "contact_page",
          "history_page"
        ]
      },
      "packageTeachers/pages/teachers/index": {
        network: "all",
        packages: ["home_page"]
      },
      "packageStudents/pages/students/index": {
        network: "all",
        packages: ["home_page"]
      },
      "packageQuestions/pages/questions/index": {
        network: "all",
        packages: ["home_page"]
      },
      "packageVideos/pages/videos/index": {
        network: "all",
        packages: ["home_page", "video_page"]
      },
      "packageVideo/pages/video/index": {
        network: "all",
        packages: ["home_page", "videos_page"]
      },
      "packageMethod/pages/method/index": {
        network: "all",
        packages: ["home_page", "history_page", "contact_page"]
      },
      "packageHistory/pages/history/index": {
        network: "all",
        packages: ["home_page", "method_page", "contact_page"]
      },
      "packageContact/pages/contact/index": {
        network: "all",
        packages: ["home_page", "method_page", "history_page"]
      }
    },
    usingComponents: {},
    pages: ["pages/index/index"],
    window: {
      navigationStyle: "custom"
    },
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    },
    cloud: true
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
