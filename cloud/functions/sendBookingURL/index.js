// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  switch (event.Content) {
    case 'booking':
      try {
        const result = await cloud.openapi.customerServiceMessage.send({
          touser: wxContext.OPENID,
          msgtype: 'text',
          text: {
            content:
              'https://booking.appointy.com/en-US/swwinnipeg/bookings/service',
          },
        });
        return result;
      } catch (err) {
        return err;
      }
      break;
    default:
      break;
  }
};
