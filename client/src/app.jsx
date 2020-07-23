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
      Taro.cloud.init();
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    entryPagePath: "packageHome/pages/home/index",
    functionalPages: true,
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
        root: "packageReviews",
        name: "reviews_page",
        pages: ["pages/reviews/index"]
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
    preloadRule: {},
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
