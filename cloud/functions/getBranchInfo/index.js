// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const country = event.country;
  const province_or_state = event.province_or_state;
  const branch_name = event.branch_name;
  const branchesCollection = db.collection('branches');
  const teachersCollection = db.collection('teachers');
  const videosCollection = db.collection('videos');
  try {
    const {
      data: [branch],
    } = await branchesCollection
      .where({
        country,
        province_or_state,
        branch_name,
      })
      .get();
    const teachers = await Promise.all(
      branch.teachers.map(async (teacher_id) => {
        const { data: teacher } = await teachersCollection
          .doc(teacher_id)
          .get();
        return teacher;
      })
    );

    const videos = await Promise.all(
      branch.videos.map(async (video_id) => {
        const { data: videos } = await videosCollection.doc(video_id).get();
        return videos;
      })
    );

    return { ...branch, teachers, videos };
  } catch (err) {
    return {};
  }
};
