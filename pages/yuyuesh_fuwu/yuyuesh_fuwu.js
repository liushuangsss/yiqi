Page({
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
    },
    show: false
  },
  jujue: function () {
    this.setData({
      show: true
    })
  },
  close: function () {
    this.setData({
      show: false
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
  },
  onLoad: function (options) {

  }
});