// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //输入框内容变化，发起请求
  handleInput(e) {
    var msg = e.detail.value;
    var _this = this;
    if (msg != "") {
      wx.request({
        url: 'http://localhost:3000/data?q=' + msg,
        success:function(data){
          _this.setData({
            searchList:data.data
          })
        }

      })
    }else{
      _this.setData({
        searchList: []
      })
    }
  },
  //点击查看详情
  handleDetails(e){
    //获取自定义的属性值（id）
    console.log(e)
    let id = e.currentTarget.dataset.id;
    //路由跳转并传值
    wx.navigateTo({
      url: '../details/details?id=' + id,
    })
  }
})