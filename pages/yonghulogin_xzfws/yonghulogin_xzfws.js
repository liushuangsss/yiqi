Page({
  data: {
    items: [
      { name: 'USA', value: '中关村·分析测试中心' },
      { name: 'CHN', value: '北京科技大学分析检验中心（北科大）', checked: 'true' },
      { name: 'BRA', value: '清华蛋白化学平台' }
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})