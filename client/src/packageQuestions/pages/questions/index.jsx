import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAccordion } from "taro-ui";
import TaroParser from "taro-parse";
import { connect } from "@tarojs/redux";
import Layout from "../../../components/layout/index.weapp";
import "./questions.scss";

@connect(state => {
  return {
    faq: state.branchInfo.faq
  };
}, null)
export default class Questions extends Component {
  state = {
    currentIndex: 0
  };
  onClick = (open, event, index) => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    return (
      <Layout
        page-class='questions'
        title='常见问题'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content-2'>
          <View className='faq-list-wrapper'>
            {this.props.faq.map((question, index) => (
              <AtAccordion
                key={question.question}
                open={this.state.currentIndex == index}
                title={question.question}
                onClick={(open, event) => this.onClick(open, event, index)}
              >
                <TaroParser
                  type='html'
                  theme='light'
                  onLoaded={() => {
                    Taro.hideLoading();
                  }}
                  content={question.answer}
                />
              </AtAccordion>
            ))}
          </View>
        </View>
      </Layout>
    );
  }
}
