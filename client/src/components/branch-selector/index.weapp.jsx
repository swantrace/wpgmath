import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import "./index.css";
import branches from "./branches";

export default class BranchSelector extends Component {
  state = {
    branch: "SW Winnipeg",
    range: [],
    value: [0, 0, 0]
  };

  componentWillMount() {
    let range = this.state.range;
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
    this.setState({
      range: range
    });
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
        this.props.onGetBranch(this.state.region);
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
        for (let i = 0; i < branches[row].provinceOrState.length; i++) {
          provinceOrStateTemp.push(branches[row].provinceOrState[i].name);
        }
        for (
          let i = 0;
          i < branches[row].provinceOrState[0].branch.length;
          i++
        ) {
          branchTemp.push(branches[row].provinceOrState[0].branch[i]);
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
          i < branches[valueTemp[0]].provinceOrState[row].branch.length;
          i++
        ) {
          branchTemp2.push(
            branches[valueTemp[0]].provinceOrState[row].branch[i]
          );
        }
        valueTemp[2] = 0;
        rangeTemp[2] = branchTemp2;
        break;
      case 2:
        break;
    }

    this.setState({
      range: rangeTemp,
      value: valueTemp
    });
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
          <View>
            <Text>{this.state.branch}</Text>
          </View>
        </Picker>
      </View>
    );
  }
}
