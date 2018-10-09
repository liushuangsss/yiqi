Page({
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
    },
    tabArrs: {
      curHdIndexs: 0,
      curBdIndexs: 0,
    },
    tabArr1: {
      curHdIndex1: 0,
      curBdIndex1: 0,
    },
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    yuyue:'',
    providerId:'',
    sbData:[]
  },
  personal: function () {
    wx.redirectTo({
      url: '/pages/qiye_per_info/per_info',
    })
  },
  yqgl: function () {
    wx.redirectTo({
      url: '/pages/yiqigl/yiqigl',
    })
  },
  addyuyue:function(options){
    // console.log(options)
    var that = this
    var yuyuedata = options.currentTarget.dataset.date;
    // console.log(yuyuedata)
    //设置当前样式
    that.setData({
      'yuyue': yuyuedata
    })
  },
  created: function () { },
  attached: function () {
    let T = new Date()
    this.setData({
      currentMonth: T.getMonth() + 1,
      year: T.getFullYear()
    })
    //判断闰年
    let yeartype = (this.data.year % 4 == 0) && (this.data.year % 100 != 0 || this.data.year % 400 == 0)
    if (yeartype) {
      this.setData({
        yearMonth: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      })
    } else {
      this.setData({
        yearMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      })
    }
    let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
    let weekStr = ""
    this.setData({
      weekNum: new Date(currentMonthDay).getDay(),
      rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth] + new Date(currentMonthDay).getDay()) / 7)
    })
    for (let i = 0; i < this.data.rowNum; i++) {
      for (let j = 0; j < 7; j++) {
        this.data.dateArr.push(i * 7 + j)
      }
    }
    this.setData({
      dateArr: this.data.dateArr
    })
  },
  methods: {
    //获取下一个月份
    add: function () {
      this.triggerEvent("addone")
      this.setData({
        dateArr: []
      })
      if (this.data.currentMonth == 12) {
        this.setData({
          currentMonth: 1,
          year: this.data.year + 1
        })
      } else {
        this.setData({
          currentMonth: this.data.currentMonth + 1
        })
      }
      let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
      let weekStr = ""
      this.setData({
        weekNum: new Date(currentMonthDay).getDay(),
        rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth - 1] + new Date(currentMonthDay).getDay()) / 7)
      })
      for (let i = 0; i < this.data.rowNum; i++) {
        for (let j = 0; j < 7; j++) {
          this.data.dateArr.push(i * 7 + j)
        }
      }
      this.setData({
        dateArr: this.data.dateArr
      })
    },
    //获取上一个月份
    reduce: function () {
      this.triggerEvent("reduceone")
      this.setData({
        dateArr: []
      })
      if (this.data.currentMonth == 1) {
        this.setData({
          currentMonth: 12,
          year: this.data.year - 1
        })
      } else {
        this.setData({
          currentMonth: this.data.currentMonth - 1
        })
      }
      let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
      let weekStr = ""
      this.setData({
        weekNum: new Date(currentMonthDay).getDay(),
        rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth - 1] + new Date(currentMonthDay).getDay()) / 7)
      })
      for (let i = 0; i < this.data.rowNum; i++) {
        for (let j = 0; j < 7; j++) {
          this.data.dateArr.push(i * 7 + j)
        }
      }
      this.setData({
        dateArr: this.data.dateArr
      })
      console.log(this.data.dateArr)
    }
  },
  tabFun: function (e) {
    //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  },
  tabFuns: function (e) {
    //获取触发事件组件的dataset属性 
    var _datasetIds = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndexs = _datasetIds;
    _obj.curBdIndexs = _datasetIds;
    this.setData({
      tabArrs: _obj
    });
  },
  shaixuan:function(){
    
  },
  onLoad: function (options) {
    var that =this;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    that.dateInit();
    that.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    })
    wx.getStorage({
      key: 'key',
      success: function (res) {
        wx.request({
          url: 'https://47.98.251.67:8443/jeesite/yqyy/yqyyReserve/getResInstView?', //仅为示例，并非真实的接口地址
          data: {
            providerId: '102212',
            instrumentId:'3'
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res.data)
            that.setData({
              sbData:res.data
            })
          }
        })
        wx.request({
          url: 'https://47.98.251.67:8443/jeesite/yqyy/yqyyReserve/getResInstView?', //仅为示例，并非真实的接口地址
          data: {
            providerId: '102212',
            instrumentId: '3',
            reserveDate:'2018-09'
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res.data)
            that.setData({
              sbData: res.data
            })
          }
        })
      }
    })
  },
  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = [];                        //需要遍历的日历数组数据
    let arrLen = 0;                            //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();                    //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();                            //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate();                //获取目标月有多少天
    let obj = {};
    let num = 0;

    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })

    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  modalcnt: function () {
    wx.showModal({
      title: '预约申请',
      content: '您的预约申请已提交,等待服务商审核',
      showCancel: false,
      confirmColor: "#0096E1",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
});