var app = getApp()
Page({
  data: {
    currentTab: 0,
    checked:false,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换

  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  setDates:function(){
    var that=this;
    if(this.data.checked==1)
    {
      that.setData({
        checked: false
      })
    }else{
      that.setData({
        checked: true
      })
    }
  }

})