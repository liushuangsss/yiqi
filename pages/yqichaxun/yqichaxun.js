Page({
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
  },
 
  addlist:function(){
    wx.navigateTo({
      url: '/pages/yiqifenlei/yiqifenlei',
    })
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
  }
});