import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Layout from "../../../components/layout/index.weapp";
import "./teachers.scss";

export default class Teachers extends Component {
  teacherInfo = [
    {
      position: "校长",
      name: "Michael Erkau",
      introduction:
        "Michael毕业于教育系学士学位，有着8年的教学经验并且Michael在IT 方便颇有见解。这些经验 让Michael相信数学在当今社会中扮演着重要的角色，而mathnasium正是一个能帮助孩子探寻数 学奥秘的地方。",
      avatar:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/Michael Erkau.jpg"
    },
    {
      position: "教师领队",
      name: "Gerald Trojillo",
      introduction:
        "Gerald是曼大理科系的在读学生。在读期间，他在数学课程上取得了优异的成绩并且数次获得数 学竞赛的奖项。Gerald同时还在医院做志愿者，他热爱篮球，对生活充满热情。他丰富的数学知 识能很好的提高学生们的数学成绩。",
      avatar:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/male.png"
    },
    {
      position: "教师",
      name: "Ansdeep Kaur",
      introduction:
        "Ansdeep持有数学系硕士学位和教育系学士学位。同时，她还有着6年的教学经验和4年的数学教 练的经验。Ansdeep在印度的时候，受到了100%的来自她教过的学生好评。",
      avatar:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/female.png"
    },
    {
      position: "教师",
      name: "Ben Haverstick",
      introduction:
        "Ben是曼大的在读学生，就读于精算数学系。Ben从小就对数学产生了极高的兴趣。在高中时间 ，Ben经常自学数学并且给周围的同学和朋友提供辅导帮助。他的对数学的探寻和见解能帮助学 生们更容易的理解数学概念掌握数学技巧。",
      avatar:
        "cloud://mathnasium-jepku.6d61-mathnasium-jepku-1300955601/male.png"
    }
  ];

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
            {this.teacherInfo.map((teacher, index) => (
              <View
                className='at-row'
                key={`${teacher.name.replace(" ", "") + index}`}
              >
                {teacher.position}/{teacher.introduction}
                <Image src={teacher.avatar} />
              </View>
            ))}
          </View>
        </View>
      </Layout>
    );
  }
}
