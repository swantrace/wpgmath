// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();
const branchesCollection = db.collection('branches');
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const longitude = event.longitude || -97.217157;
  const latitude = event.latitude || 49.841241;

  try {
    const { data: branches } = await branchesCollection
      .field({
        country: true,
        province_or_state: true,
        branch_name: true,
        location: true,
      })
      .where({
        location: _.geoNear({
          geometry: db.Geo.Point(longitude, latitude),
        }),
      })
      .get();

    const rawBranchList = {};
    const branchList = [];

    branches.forEach((branch) => {
      const country = branch.country;
      const provinceOrState = branch.province_or_state;
      const branchName = branch.branch_name;
      rawBranchList[country] = rawBranchList[country] || {};
      rawBranchList[country][provinceOrState] =
        rawBranchList[country][provinceOrState] || [];
      rawBranchList[country][provinceOrState].push(branchName);
    });

    Object.keys(rawBranchList).forEach((countryName) => {
      const item = {
        name: countryName,
        provinceOrState: [],
      };
      const states = rawBranchList[countryName];
      Object.keys(states).forEach((stateName) => {
        item.provinceOrState.push({
          name: stateName,
          branch: states[stateName],
        });
      });
      branchList.push(item);
    });

    return branchList;
  } catch (err) {
    return [];
  }
};
