// pages/yonghu_login/yonghu_login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: ''
  },
  toget: function () {
    wx.navigateTo({
      url: '/pages/togetpsd/togetpsd',
    })
  },
  zhanghao: function (e) {
    var that = this;
    that.setData({
      mobile: e.detail.value
    })
  },
  password: function (e) {
    var that = this;
    that.setData({
      password: e.detail.value
    })
  },
  login: function () {
    var that = this;
    wx.request({
      url: 'https://47.98.251.67:8443/jeesite/yqyy/loginManager?',
      data: {
        account: that.data.mobile,
        password: that.data.password
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
       if(res.data.code == 200){
         wx.showToast({
           title: '登录成功',
           duration:2000
         })
         wx.setStorage({
           key: "key",
           data: res.data.hashMap
         })
          wx: wx.navigateTo({
            url: '/pages/yuyuegl_zhsj/yuyuegl_zhsj'
          })
       }
        console.log(res)
      },
      fail: function (res) {

      },
      complete: function (res) { },
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