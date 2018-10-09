// pages/zhuce/zhuce.js
const app = getApp()
var countdown = 60;
// var settime = function (that) {
//   if (countdown == 0) {
//     that.setData({
//       is_show: false,
//       is_show1: true,
//       last_time: countdown
//     })
//     countdown = 60;
//     return;
//   } else {
//     that.setData({
//       is_show: true,
//       is_show1: false,
//       last_time: countdown
//     })

//     countdown--;
//   }
//   setTimeout(function () {
//     settime(that)
//   }
//     , 1000)
// }


Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:''
  },
  clicktel:function(e){
    this.setData({
      mobile:e.detail.value
    })
  },
  getyzm: function () {
    var that=this;
    wx.request({
      url: 'https://47.98.251.67:8443/jeesite/yqyy/userReg/getMsgCode?',
      data: {
        mobile: that.data.mobile
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  subval: function (e) {
    var that = this;
    var nickName =e.detail.value.nickName; //昵称
    that.mobile = e.detail.value.mobile; //手机号
    var code = e.detail.value.code; //验证码
    var password = e.detail.value.password; //密码
    var serviceProviderId = e.detail.value.serviceProviderId; //邀请码
    if (!nickName){
      wx.showToast({
        title: '请输入昵称',
        icon:'none',
        duration:2000
      })
      return false;
    }
    if (!this.data.mobile) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if(!code){
      wx.showToast({
        title: '请输入验证码',
        icon:'none',
        duration:2000
      })
      return false;
    }
    if(!password){
      wx.showToast({
        title: '请输入密码',
        icon:'none',
        duration:2000
      })
      return false;
    }
    if (!serviceProviderId){
      wx.showToast({
        title: '请输入邀请码',
        icon:'none',
        duration:2000
      })
      return false;
    }
    console.log(code)
    wx.request({
      url: 'https://47.98.251.67:8443/jeesite/yqyy/userReg/reg?',
      data: {
        nickName: nickName,
        mobile: that.mobile,
        code: code,
        password: password,
        serviceProviderId: serviceProviderId
      },
      method:'GET',
      header: {
        'content-type': 'application/json' 
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})