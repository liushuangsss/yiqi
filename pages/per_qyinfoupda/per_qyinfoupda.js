// pages/per_qyinfoupda/per_qyinfoupda.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    myData: '',
    imgsrc:''
  },
  kongxian:function(){
    wx.navigateTo({
      url: '/pages/kongxianshijian/kongxianshijian',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =  this;
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
              myData: res.data,
              imgsrc:res.data.photo
            })
            console.log(that.data.myData)
          }
        })
      }
    })
  },
  updataimg:function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res)
            console.log(res.height)
            that.setData({
              imgsrc: res.path
            })
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