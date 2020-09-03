import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import TaroParser from "taro-parse";
import { connect } from "@tarojs/redux";
import Layout from "../../../components/layout/index.weapp";
import "./method.scss";

@connect(state => {
  return {
    methods: state.branchInfo.methods
  };
}, null)
export default class Method extends Component {
  render() {
    return (
      <Layout
        page-class='method'
        currentTabNumber='1'
        title='教学方法'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content'>
          <View className='teaching-methods-wrapper'>
            {this.props.methods.map((method, index) =>
              index % 2 == 0 ? (
                <View
                  key={method.title}
                  className='method-wrapper even-method-wrapper at-row at-row__align--center at-row__justify--center'
                >
                  <View
                    className='image-wrapper at-col at-col-5'
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Image src={method.image} mode='widthFix' />
                  </View>
                  <View
                    className='introduction-wrapper at-col at-col-7'
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                      paddingLeft: "10rpx"
                    }}
                  >
                    <View
                      className='method-name-wrapper'
                      style={{
                        textAlign: "center",
                        paddingBottom: "10rpx",
                        lineHeight: "40rpx"
                      }}
                    >
                      {method.title}
                      {/* <Image
                        src={method.icon}
                        mode='center'
                        style={{
                          width: "40rpx",
                          height: "40rpx",
                          paddingLeft: "10rpx"
                        }}
                      /> */}
                    </View>
                    <View
                      className='introduction'
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {method.content}
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  key={method.title}
                  className='method-wrapper odd-method-wrapper at-row at-row__align--center at-row__justify--center'
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
                      className='method-name-wrapper'
                      style={{
                        textAlign: "center",
                        paddingBottom: "10rpx",
                        lineHeight: "40rpx"
                      }}
                    >
                      {method.title}
                      {/* <Image
                        src={method.icon}
                        mode='center'
                        style={{
                          width: "40rpx",
                          height: "40rpx",
                          paddingLeft: "10rpx"
                        }}
                      /> */}
                    </View>
                    <View
                      className='introduction'
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {method.content}
                    </View>
                  </View>
                  <View
                    className='avatar-wrapper at-col-5'
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Image src={method.image} mode='widthFix' />
                  </View>
                </View>
              )
            )}
          </View>
        </View>
      </Layout>
    );
  }
}
