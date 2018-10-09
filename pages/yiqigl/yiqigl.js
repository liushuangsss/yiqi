Page({
  data: {
    navbar: [],
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
    },
    yiqiData: [],
    providerId: ''
  },
  personal: function () {
    wx.redirectTo({
      url: '/pages/qiye_per_info/per_info',
    })
  },
  searchyq:function(){
    
  },
  yuyuegl: function () {
    wx.redirectTo({
      url: '/pages/yuyuegl_zhsj/yuyuegl_zhsj',
    })
  },
  addleibie: function () {
    wx.navigateTo({
      url: '/pages/yiqigl_yiqifl/yiqigl_yiqifl',
    })
  },
  addyq: function () {
    wx.navigateTo({
      url: '/pages/yiqigl_add/yiqigl_add',
    })
  },
  tabFun: function (e) {
    //获取触发事件组件的dataset属性 
    var that = this;
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    that.setData({
      tabArr: _obj
    });
    console.log(e)
    wx.getStorage({
      key: 'key',
      success: function (res) {
      that.setData({
        providerId: res.data.userInfo.id
      })
        wx.request({
          url: 'https://47.98.251.67:8443/jeesite//yqyy/yqyyInstrument/getInstruments?', //仅为示例，并非真实的接口地址
          data: {
            providerId:  res.data.userInfo.id,
            category: e.target.dataset.idxx,
            keyWord: '仪器'
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res.data)
            that.setData({
              yiqiData: res.data
            })
          }
        })
      }
    })
  },
  lookxq: function (e) {
    var that = this;
    var ids = e.currentTarget.dataset.ids;
    wx.navigateTo({
      url: '/pages/yiqi_xq/yiqi_xq?id=' + ids,  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        wx.request({
          url: 'https://47.98.251.67:8443/jeesite//yqyy/yqyyInstrument/getInstruments?', //仅为示例，并非真实的接口地址
          data: {
            providerId:  res.data.userInfo.id,
            category: '全部',
            keyWord: '仪器'
          },
          type: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res.data)
            that.setData({
              yiqiData: res.data
            })
          }
        })
      }
    })
    wx.request({
      url: 'https://47.98.251.67:8443/jeesite/yqyy/yqyyInstrument/getCategoryList?', //仅为示例，并非真实的接口地址
      data: {
        providerId: that.data.providerId,
      },
      type: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          navbar:res.data
        })
      }
    })
  }
});