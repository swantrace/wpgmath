Component({
  properties: {
    // back | dizhidingwei | activity | Arrowright | Arrowleft | teach-info | travelholidayvacat | location | lishi | contact | Arrowdown | home | SCHEDULE | question | shoucex | video | Share | student | custom-teacher | selectdefault
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * swan.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    quot: '"',
    svgSize: 18 / 750 * swan.getSystemInfoSync().windowWidth,
    isStr: true,
  },
});
