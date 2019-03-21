// index.js
Page({
  data: {
    listData: [
      { "date": "2019/01/01", "time": "9:00", "content": "工作内容1" },
      { "date": "2019/01/01", "time": "10:30", "content": "工作内容2" },
      { "date": "2019/01/01", "time": "12:00", "content": "工作内容3" },
      { "date": "2019/01/01", "time": "2:30", "content": "工作内容4" },
      { "date": "2019/01/01", "time": "3:30", "content": "工作内容5" },
      { "date": "2019/01/01", "time": "4:00", "content": "工作内容6" },
      { "date": "2019/01/01", "time": "5:00", "content": "工作内容7" },
      { "date": "2019/01/02", "time": "9:00", "content": "工作内容1" },
      { "date": "2019/01/02", "time": "10:30", "content": "工作内容2" },
      { "date": "2019/01/02", "time": "12:00", "content": "工作内容3" },
      { "date": "2019/01/02", "time": "2:30", "content": "工作内容4" },
      { "date": "2019/01/02", "time": "3:30", "content": "工作内容5" },
      { "date": "2019/01/02", "time": "4:00", "content": "工作内容6" },
      { "date": "2019/01/02", "time": "5:00", "content": "工作内容7" }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})