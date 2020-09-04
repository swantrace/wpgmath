import Taro, { Component } from "@tarojs/taro";
import { View, Image, Map } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import TaroParser from "taro-parse";
import Layout from "../../../components/layout/index.weapp";
import "./contact.scss";

@connect(state => {
  return {
    contact: state.branchInfo.contact,
    contactHeadImage: state.branchInfo.contact_head_image,
    textAddress: state.branchInfo.text_address,
    coordinates: state.branchInfo.location.coordinates,
    phone: state.branchInfo.phone
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
              mode='widthFix'
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
          <View
            style={{
              margin: "10px auto",
              width: "253px",
              fontSize: "0.8em",
              lineHeight: "1em",
              letterSpacing: "0.05em",
              color: "#E9322E"
            }}
          >
            温尼伯联系电话：{this.props.phone}
          </View>
          {this.props.coordinates && this.props.coordinates.length && (
            <Map
              scale={13}
              longitude={this.props.coordinates[0]}
              latitude={this.props.coordinates[1]}
              markers={[
                {
                  id: 0,
                  latitude: this.props.coordinates[1],
                  longitude: this.props.coordinates[0],
                  iconPath:
                    "https://6d61-mathnasium-jepku-1300955601.tcb.qcloud.la/location.png?sign=7866eefd1dd5474320b9184d5d48c9fc&t=1599180540"
                }
              ]}
              style={{ margin: "60rpx auto 0" }}
            ></Map>
          )}
        </View>
      </Layout>
    );
  }
}
