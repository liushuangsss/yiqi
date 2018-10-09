// pages/yiqifenlie/yiqifenlie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: [
      { id: 0, value: '环境监测仪器' },
      { id: 1, value: '光学仪器' },
      { id: 2, value: '生命科学仪器' },
      { id: 3, value: '测量计量仪器' },
      { id: 4, value: '分析仪器' },
      { id: 5, value: '物性测试仪器' },
      { id: 6, value: '分析仪器' },
      { id: 7, value: '实验室常用设备' }
    ],
    names: [
      { id: 0, value: '维修' },
      { id: 1, value: '检测' },
      { id: 2, value: '停用' }
    ],
    list: [
      { id: 0, value: '9:00-10:00' },
      { id: 1, value: '10:00-11:00' },
      { id: 2, value: '11:00-12:00' },
      { id: 3, value: '12:00-13:00' },
      { id: 4, value: '13:00-14:00' },
      { id: 5, value: '14:00-15:00' },
      { id: 6, value: '15:00-16:00' },
      { id: 7, value: '16:00-17:00' },
      { id: 8, value: '17:00-18:00' }
    ],
    lists: [
      { id: 0, value: '9:00-10:00' },
      { id: 1, value: '10:00-11:00' },
      { id: 2, value: '11:00-12:00' },
      { id: 3, value: '12:00-13:00' },
      { id: 4, value: '13:00-14:00' },
      { id: 5, value: '14:00-15:00' },
      { id: 6, value: '15:00-16:00' },
      { id: 7, value: '16:00-17:00' },
      { id: 8, value: '17:00-18:00' }
    ],
    show: '',
    showModal: true,
    showModal1: true,
    weekLength: 7,
    week: ["日", "一", "二", "三", "四", "五", "六"],
    dayList: [],
    weekNum: 0,
    tapThis: 0,
    thisMonth: 0,
    thisYear: 0,
    dayIndex: 0,
    chooseDate: "",
    thisMonth1: 0,
    thisYear1: 0,
    dayIndex1: 0,
    chooseDate1: ""
  },
  getWeek(year, month, day) {
    var that = this;
    var d = new Date();
    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(1);
    var n = d.getDay();
    var arr = [];
    var Index = 0;
    var dayN = 1;
    for (var i = 0; i < day; i++) {
      arr.push(dayN++);
    }
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDay = now.getDate();
    var val = 1;
    if (year == nowYear) {
      if (month == nowMonth) {
        Index = arr.indexOf(nowDay);
        console.log(Index);
        val = nowDay;
      }
    }
    that.setData({
      weekNum: n,
      dayList: arr,
      dayIndex: Index,
      tapThis: Index,
      thisMonth: month,
      thisYear: year,
      chooseDate: year + "-" + month + "-" + val,
    })
  },
  prev: function () {
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDay = now.getDate();
    var val = 1;
    console.log(nowMonth - 1)
  
    if (this.data.thisMonth == 1) {
      this.setData({
        thisMonth: 12,
        thisYear: this.data.thisYear - 1
      })
    } else {
      this.setData({
        thisMonth: this.data.thisMonth - 1
      })
    }
  },
  next: function () {
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDay = now.getDate();
    var val = 1;
    console.log(Number(this.data.thisMonth))
    if (this.data.thisMonth == 12) {
      this.setData({
        thisMonth: 1,
        thisYear: Number(this.data.thisMonth)+ 1
      })
    } else {
      this.setData({
        thisMonth: Number(this.data.thisMonth)+ 1
      })
    }
  },
  chooseDate(e) {
    var that = this;
    var n = e.currentTarget.dataset.index;
    var val = e.currentTarget.dataset.value;
    if (n >= that.data.dayIndex) {
      that.setData({
        tapThis: n,
        chooseDate: that.data.thisYear + "-" + that.data.thisMonth + "-" + val,
        showModal: true,
      })
    }
    console.log(that.data.chooseDate)
  },
  getWeek1(year1, month1, day1) {
    var that = this;
    var d1 = new Date();
    d1.setFullYear(year1);
    d1.setMonth(month1 - 1);
    d1.setDate(1);
    var n1 = d1.getDay();
    var arr1 = [];
    var Index1 = 0;
    var dayN1 = 1;
    for (var i = 0; i < day1; i++) {
      arr1.push(dayN1++);
    }
    var now1 = new Date();
    var nowYear1 = now1.getFullYear();
    var nowMonth1 = now1.getMonth() + 1;
    var nowDay1 = now1.getDate();
    var val1 = 1;
    if (year1 == nowYear1) {
      if (month1 == nowMonth1) {
        Index1 = arr1.indexOf(nowDay1);
        console.log(Index1);
        val1 = nowDay1;
      }
    }
    that.setData({
      weekNum1: n1,
      dayList1: arr1,
      dayIndex1: Index1,
      tapThis1: Index1,
      thisMonth1: month1,
      thisYear1: year1,
      chooseDate1: year1 + "-" + month1 + "-" + val1,
    })
  },
  prev1: function () {
    if (this.data.thisMonth1 == 1) {
      this.setData({
        thisMonth1: 12,
        thisYear1: this.data.thisYear1 - 1
      })
    } else {
      this.setData({
        thisMonth1: this.data.thisMonth1 - 1
      })
    }
  },
  next1: function () {
    console.log(Number(this.data.thisMonth1))
    if (this.data.thisMonth1 == 12) {
      this.setData({
        thisMonth1: 1,
        thisYear1: Number(this.data.thisMonth1) + 1
      })
    } else {
      this.setData({
        thisMonth1: Number(this.data.thisMonth1) + 1
      })
    }
  },
  chooseDate1(e) {
    var that = this;
    var n1 = e.currentTarget.dataset.index;
    var val1 = e.currentTarget.dataset.value;
    if (n1 >= that.data.dayIndex) {
      that.setData({
        tapThis1: n1,
        chooseDate1: that.data.thisYear1 + "-" + that.data.thisMonth1 + "-" + val1,
        showModal1: true,
      })
    }
    console.log(that.data.chooseDate1)
  },
  /** 
  * 弹出框蒙层截断touchmove事件 
  */
  preventTouchMove: function () {
  },
  /** 
   * 隐藏模态对话框 
   */
  hideModal() {
    var that = this;
    that.setData({
      showModal: true,
      showModal1:true
    })
  },
  showModalBtn() {
    var that = this;
    that.setData({
      showModal: false
    })
  },
  showModalBtn1:function() {
    console.log('sss')
    var that = this;
    that.setData({
      showModal1: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this;
    that.getWeek("2018", "9", "31"); //使用方法： 在此函数内传入年、月、日(此月的天数)即可。
    that.getWeek1("2018", "9", "31"); //使用方法： 在此函数内传入年、月、日(此月的天数)即可。
  },
  tabsta: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'show': id
    })
  },
  tabstas: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'shows': id
    })
  },
  tabstaes: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'showes': id
    })
  },
  tabstase: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'showse': id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  serviceSelection: function() {
    this.setData({
      isChecked: true
    })
  },
  serviceSelection1: function () {
    this.setData({
      isChecked1: true
    })
  },
  serviceSelection2: function () {
    this.setData({
      isChecked2: true
    })
  },
  serviceSelection3: function () {
    this.setData({
      isChecked3: true
    })
  }
})