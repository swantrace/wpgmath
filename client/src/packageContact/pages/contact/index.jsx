import Taro, { Component } from "@tarojs/taro";
import { View, Image, Map } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import TaroParser from "taro-parse";
import "taro-parse/dist/style/main.scss";
import Layout from "../../../components/layout/index.weapp";
import "./contact.scss";

@connect(state => {
  return {
    contact: state.branchInfo.contact,
    contactHeadImage: state.branchInfo.contact_head_image,
    textAddress: state.branchInfo.text_address,
    coordinates: state.branchInfo.location.coordinates
  };
}, null)
export default class Contact extends Component {
  render() {
    return (
      <Layout
        page-class='contact'
        currentTabNumber='3'
        title='联系我们'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content'>
          <TaroParser
            type='html'
            theme='light'
            onLoaded={() => {
              Taro.hideLoading();
            }}
            content={this.props.contact}
          />
          <View className='contact-image-wrapper'>
            <Image
              src={this.props.contactHeadImage}
              mode='scaleToFill'
              style={{ width: "100%" }}
            />
          </View>
          <View
            style={{
              padding: "0 auto",
              color: "#3567B0",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            温尼伯分校地址
          </View>
          <View style={{ margin: "10px auto", width: "253px" }}>
            {this.props.textAddress}
          </View>
          <Map
            longitude={this.props.coordinates[0]}
            latitude={this.props.coordinates[1]}
            style={{ width: "100vw", height: "80vw" }}
          ></Map>
        </View>
      </Layout>
    );
  }
}
