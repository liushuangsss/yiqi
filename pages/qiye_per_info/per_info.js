// pages/per_info/per_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    myData:''
  },
  infoqiye:function(){
    wx.navigateTo({
      url: '/pages/per_qyinfoupda/per_qyinfoupda',
    })
  },
  myxiaoxi:function(){
    wx.navigateTo({
      url: '/pages/qiye_xiaoxizhongxin/xiaoxizhongxin',
    })
  },
  yuyuegl:function(){
    wx.redirectTo({
      url: '/pages/yuyuegl_zhsj/yuyuegl_zhsj',
    })
  },
  yuyushlist:function(){
    wx.navigateTo({
      url: '/pages/yuyue_list/yuyue_list',
    })
  },
  yqgl:function(){
    wx.redirectTo({
      url: '/pages/yiqigl/yiqigl',
    })
  },
  sqgl:function(){
    wx.navigateTo({
      url: '/pages/per_sqzx/per_sqzx',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        wx.request({
          url: 'https://47.98.251.67:8443/jeesite/yqyy/yqyyProvider/getMine?', //仅为示例，并非真实的接口地址
          data: {
            id: res.data.userInfo.id
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            that.setData({
              myData:res.data
            })
            console.log(that.data.myData)
          }
        })
      }
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
  
  }
})