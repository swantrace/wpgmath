import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import IconFont from "../iconfont";
import { updateBranch, updateBranchesWithDBQuery } from "../../actions/index";
import "./index.scss";

@connect(
  state => {
    return {
      branchName: state.branchName,
      branches: state.branches
    };
  },
  dispatch => ({
    dispatchUpdateBranch(country, provinceOrState, branchName) {
      return dispatch(updateBranch(country, provinceOrState, branchName));
    },
    dispatchUpdateBranchesWithDBQuery(latitude, longitude) {
      return dispatch(updateBranchesWithDBQuery(latitude, longitude));
    }
  })
)
export default class BranchSelector extends Component {
  state = {
    // branch: "请选择分校",
    range: [],
    value: [0, 0, 0]
  };

  componentDidMount() {
    Taro.getLocation({
      success: res => {
        this.locationToBranches(
          res.latitude,
          res.longitude,
          this.props.branches
        );
      },
      fail: () => {
        this.locationToBranches(49.8844, -97.14704, this.props.branches);
      }
    });
  }

  branchesToRange(branches) {
    let range = [];
    let temp = [];
    for (let i = 0; i < branches.length; i++) {
      temp.push(branches[i].name);
    }
    range.push(temp);
    temp = [];
    for (let i = 0; i < branches[0].provinceOrState.length; i++) {
      temp.push(branches[0].provinceOrState[i].name);
    }
    range.push(temp);
    temp = [];
    for (let i = 0; i < branches[0].provinceOrState[0].branch.length; i++) {
      temp.push(branches[0].provinceOrState[0].branch[i]);
    }
    range.push(temp);
    return range;
  }

  locationToBranches(latitude, longitude, branches) {
    if (branches.length == 0) {
      this.props
        .dispatchUpdateBranchesWithDBQuery(latitude, longitude)
        .then(() => {
          const range = this.branchesToRange(this.props.branches);
          this.setState(
            {
              range: range
              // branch: `${range[2][this.state.value[2]]}`
            },
            () => {
              const country = this.state.range[0][this.state.value[0]];
              const provinceOrState = this.state.range[1][this.state.value[1]];
              const branchName = this.state.range[2][this.state.value[2]];
              this.props.dispatchUpdateBranch(
                country,
                provinceOrState,
                branchName
              );
            }
          );
        });
    } else {
      const range = this.branchesToRange(branches);
      this.setState(
        {
          range: range
          // branch: `${range[2][this.state.value[2]]}`
        },
        () => {
          const country = this.state.range[0][this.state.value[0]];
          const provinceOrState = this.state.range[1][this.state.value[1]];
          const branchName = this.state.range[2][this.state.value[2]];
          this.props.dispatchUpdateBranch(country, provinceOrState, branchName);
        }
      );
    }
  }

  goToHome = () => {
    Taro.redirectTo({ url: "/packageHome/pages/home/index" });
  };

  onChange = e => {
    // let branchTemp = this.state.branch;
    let rangeTemp = this.state.range;
    let valueTemp = this.state.value;

    valueTemp = e.detail.value;
    // branchTemp = `${rangeTemp[2][valueTemp[2]]}`;

    this.setState(
      {
        // branch: branchTemp,
        range: rangeTemp,
        value: valueTemp
      },
      () => {
        const country = this.state.range[0][this.state.value[0]];
        const provinceOrState = this.state.range[1][this.state.value[1]];
        const branchName = this.state.range[2][this.state.value[2]];
        this.props.dispatchUpdateBranch(country, provinceOrState, branchName);
      }
    );
  };

  onColumnChange = e => {
    let rangeTemp = this.state.range;
    let valueTemp = this.state.value;
    let column = e.detail.column;
    let row = e.detail.value;

    valueTemp[column] = row;
    switch (column) {
      case 0:
        let provinceOrStateTemp = [];
        let branchTemp = [];
        for (
          let i = 0;
          i < this.props.branches[row].provinceOrState.length;
          i++
        ) {
          provinceOrStateTemp.push(
            this.props.branches[row].provinceOrState[i].name
          );
        }
        for (
          let i = 0;
          i < this.props.branches[row].provinceOrState[0].branch.length;
          i++
        ) {
          branchTemp.push(
            this.props.branches[row].provinceOrState[0].branch[i]
          );
        }
        valueTemp[1] = 0;
        valueTemp[2] = 0;
        rangeTemp[1] = provinceOrStateTemp;
        rangeTemp[2] = branchTemp;
        break;
      case 1:
        let branchTemp2 = [];
        for (
          let i = 0;
          i <
          this.props.branches[valueTemp[0]].provinceOrState[row].branch.length;
          i++
        ) {
          branchTemp2.push(
            this.props.branches[valueTemp[0]].provinceOrState[row].branch[i]
          );
        }
        valueTemp[2] = 0;
        rangeTemp[2] = branchTemp2;
        break;
      case 2:
        break;
    }

    this.setState(
      {
        range: rangeTemp,
        value: valueTemp
      },
      () => {
        const country = this.state.range[0][this.state.value[0]];
        const provinceOrState = this.state.range[1][this.state.value[1]];
        const branchName = this.state.range[2][this.state.value[2]];
        this.props.dispatchUpdateBranch(country, provinceOrState, branchName);
      }
    );
  };

  render() {
    return (
      <View
        className={
          this.props.branchName == "请选择分校"
            ? "taro-region-picker taro-region-picker-gray"
            : "taro-region-picker taro-region-picker-black"
        }
      >
        <Picker
          mode='multiSelector'
          onChange={this.onChange}
          onColumnChange={this.onColumnChange}
          range={this.state.range}
          value={this.state.value}
        >
          {this.props.forHeader ? (
            <View style={{ display: "flex", alignItems: "center" }}>
              <IconFont
                name='edit-location'
                size={55}
                className='at-col at-col-1'
              />
              <Text style={{ paddingLeft: "14rpx" }}>
                {this.props.branchName}
              </Text>
            </View>
          ) : (
            <View>
              {!this.props.branches.length ? (
                <Button
                  className='branch-selector-button branch-selector-select-button'
                  loading
                  disabled
                >
                  请选择分校
                </Button>
              ) : (
                <Button className='branch-selector-button branch-selector-select-button'>
                  请选择分校
                </Button>
              )}
            </View>
          )}
        </Picker>
        {!this.props.forHeader && this.props.branchName != "请选择分校" ? (
          <View>
            <Button
              className='branch-selector-button branch-selector-enter-button'
              onClick={this.goToHome}
            >
              进入 {this.props.branchName}
            </Button>
          </View>
        ) : null}
      </View>
    );
  }
}
