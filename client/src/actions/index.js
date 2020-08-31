import Taro from "@tarojs/taro";
import { SWITCH_BRANCH_NAME, UPDATE_BRANCH_INFO } from "../constants/index";

export const switchBranchName = (country, provinceOrState, branchName) => {
  return {
    type: SWITCH_BRANCH_NAME,
    payload: {
      country,
      provinceOrState,
      branchName
    }
  };
};

export const updateBranchInfo = branchInfo => {
  return {
    type: UPDATE_BRANCH_INFO,
    payload: {
      branchInfo
    }
  };
};

export const updateBranchInfoWithDBQuery = (
  country,
  province_or_state,
  branch_name
) => {
  return dispatch => {
    return Taro.cloud
      .callFunction({
        name: "getBranchInfo",
        data: {
          country,
          province_or_state,
          branch_name
        }
      })
      .then(res => {
        const { result: branchInfo } = res;
        dispatch(updateBranchInfo(branchInfo));
      });
  };
};

export const updateBranch = (country, provinceOrState, branchName) => {
  return dispatch => {
    dispatch(switchBranchName(country, provinceOrState, branchName));
    dispatch(updateBranchInfoWithDBQuery(country, provinceOrState, branchName));
  };
};
