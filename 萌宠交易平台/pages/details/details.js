
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //接收路由跳转时传来的值
      var id = options.id;
      var _this = this;
    //根据id请求数据
    wx.request({
      url: 'http://localhost:3000/data/' + id,
      success: function(data) {
        _this.setData({
          detailsList:data.data
        })
      }
    })

  }
})