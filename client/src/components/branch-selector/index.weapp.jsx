import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import IconFont from "../iconfont";
import { updateBranch } from "../../actions/index";
import "./index.css";

@connect(
  state => {
    return {
      branchName: state.branchName
    };
  },
  dispatch => ({
    dispatchUpdateBranch(country, provinceOrState, branchName) {
      dispatch(updateBranch(country, provinceOrState, branchName));
    }
  })
)
export default class BranchSelector extends Component {
  state = {
    branch: "请选择分校",
    range: [],
    value: [0, 0, 0]
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.branches.length == 0 && nextProps.branches.length > 0) {
      let range = this.state.range;
      let temp = [];
      for (let i = 0; i < nextProps.branches.length; i++) {
        temp.push(nextProps.branches[i].name);
      }
      range.push(temp);
      temp = [];
      for (let i = 0; i < nextProps.branches[0].provinceOrState.length; i++) {
        temp.push(nextProps.branches[0].provinceOrState[i].name);
      }
      range.push(temp);
      temp = [];
      for (
        let i = 0;
        i < nextProps.branches[0].provinceOrState[0].branch.length;
        i++
      ) {
        temp.push(nextProps.branches[0].provinceOrState[0].branch[i]);
      }
      range.push(temp);
      this.setState(
        {
          range: range,
          branch: `${range[2][this.state.value[2]]}`
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

  onChange = e => {
    let branchTemp = this.state.branch;
    let rangeTemp = this.state.range;
    let valueTemp = this.state.value;

    valueTemp = e.detail.value;
    branchTemp = `${rangeTemp[2][valueTemp[2]]}`;

    this.setState(
      {
        branch: branchTemp,
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
          this.state.branch == "请选择分校"
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
            <View>
              <IconFont name='location' size={34} className='at-col at-col-1' />
              <Text>{this.props.branchName}</Text>
            </View>
          ) : (
            <View>
              <Button>请选择分校</Button>
            </View>
          )}
        </Picker>
        {!this.props.forHeader && this.props.branchName != "请选择分校" ? (
          <View>
            <Button>进入 {this.props.branchName}</Button>
          </View>
        ) : null}
      </View>
    );
  }
}
