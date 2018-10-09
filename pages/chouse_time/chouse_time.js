// pages/chouse_time/chouse_time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    show: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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