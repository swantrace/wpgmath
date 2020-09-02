import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { updateBranchesWithDBQuery } from "../../actions/index";
import IconFont from "../iconfont";
import BranchSelector from "../branch-selector/index.weapp";
import Avatar from "./Avatar.weapp";
import "./header.scss";

@connect(
  state => ({
    branches: state.branches
  }),
  dispatch => ({
    dispatchUpdateBranchesWithDBQuery(latitude, longitude) {
      dispatch(updateBranchesWithDBQuery(latitude, longitude));
    }
  })
)
export default class Header extends Component {
  componentDidMount() {
    if (this.props.branches && this.props.branches.length == 0) {
      Taro.getLocation({
        success: res => {
          this.props.dispatchUpdateBranchesWithDBQuery(
            res.latitude,
            res.longitude
          );
        }
      });
    }
  }

  goBackHome = () => {
    Taro.redirectTo({ url: "/packageHome/pages/home/index" });
  };

  onGetBranch = e => {
    console.log(e);
  };

  render() {
    return this.props.isHome ? (
      <View className='header-wrapper at-row at-row__justify--around at-row__align--center'>
        <View className='at-col at-col-5' style={{ height: "100%" }}>
          <BranchSelector
            branches={this.props.branches}
            forHeader={this.props.forHeader}
          />
        </View>
        <View
          className='at-col at-col-1 at-col__offset-5'
          style={{ height: "100%" }}
        >
          <Avatar />
        </View>
      </View>
    ) : (
      <View
        className='header-wrapper at-row at-row__justify--around at-row__align--center'
        style={{ padding: "0 20rpx" }}
      >
        <View style={{ display: "none" }}>
          <BranchSelector
            onGetBranch={this.onGetBranch}
            branches={this.props.branches}
            forHeader={this.props.forHeader}
          />
        </View>
        <Button onClick={this.goBackHome} className='btn-no-border'>
          <IconFont name='back' size={55} className='at-col at-col-1' />
        </Button>
        <View className='at-col at-col-10' style={{ textAlign: "center" }}>
          <Text
            style={{
              color: `${this.props.titleColor}`,
              letterSpacing: "0.2em",
              fontWeight: "bold"
            }}
          >
            {this.props.title}
          </Text>
        </View>
        <View className='at-col at-col-1' style={{ height: "100%" }}>
          <Avatar />
        </View>
      </View>
    );
  }
}

Header.externalClasses = ["btn-no-border", "btn-normal"];
