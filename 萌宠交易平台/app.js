//app.js
App({
globalData:{
  screenWidth:"",
  screenHeight:""
},
  onLaunch(){
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res)
        _this.globalData.screenHeight = res.screenHeight;
        _this.globalData.screenWidth = res.screenWidth

      },
    })
  }
})