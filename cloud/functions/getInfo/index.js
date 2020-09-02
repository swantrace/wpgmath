// 云函数入口文件
const cloud = require('wx-server-sdk');
const axios = require('axios');

cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.collection) {
    case 'teachers':
      const teachersCollection = db.collection('teachers');
      const { data: teachers } = await teachersCollection.get();
      return teachers;
      break;
    case 'branches':
      const branchesCollection = db.collection('branches');
      const { data: branches } = await branchesCollection.get();
      return branches;
    case 'videos':
      const videosCollection = db.collection('videos');
      const { data: videos } = await videosCollection.get();
      return videos;
    default:
      return [];
      break;
  }
};
