// pages/yiqigl_yiqifl/yiqigl_yiqifl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenlei: [],
    fen:''
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
          url: 'https://47.98.251.67:8443/jeesite/yqyy/yqyyInstrument/getCategoryList?', //仅为示例，并非真实的接口地址
          data: {
            providerId: res.data.userInfo.id,
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            that.setData({
              fenlei: res.data
            })
          }
        })
      }
    })
   
  },
  write:function(e){
    console.log(e)
    this.setData({
      fen: e.detail.value
    })
  },
  fenleiAdd:function(){
    var that = this;
    wx.request({
      url: 'https://47.98.251.67:8443/js/f/order/addDeviceType?', //仅为示例，并非真实的接口地址
      data: {
        deviceType: that.data.fen
      },
      type: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        
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