//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //精度
    longitude: "",
    //纬度
    latitude: "",
    markers: [],
    //地图控件
    controls: [{
      //控件
      id: 1,
      //图标
      iconPath: '../../images/pin.png',
      position: {
        //图标初始位置(屏幕大概中间位置)
        left: (app.globalData.screenWidth - 20) / 2,
        top: (app.globalData.screenHeight - 166) / 2,
        //图标大小
        width: 20,
        height: 31
      },
      clickable: true
    }, {
      id: 2,
      //图标
      iconPath: '../../images/center.png',
      position: {
        //图标初始位置(屏幕大概中间位置)
        left: 20,
        top: app.globalData.screenHeight - 166,
        //图标大小
        width: 24,
        height: 25
      },
      clickable: true
    }]
  },
  //页面加载
  onLoad() {
    //获取地图控件   map未xml中地图的id值
    this.map = wx.createMapContext('map')
    //获取所有发布的信息，用于设置marker
    this.handleGetmarkers()
    //记录this指向
    var _this = this;
    //获取当前用户的位置
    wx.getLocation({
      //gcj02 返回可用于 wx.openLocation 的坐标
      type: "gcj02",
      success: function(res) {
        // console.log(res)
        //修改值
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  //地图控件，点击事件处理函数
  controltap(e) {
    console.log(e)
    this.map.moveToLocation()
  },
  //点击发布按钮
  handlePubic() {
    //路由跳转
    wx.navigateTo({
      url: '../public/public',
    })
  },
  //搜索按钮
  handleSearch() {
    //路由跳转
    wx.navigateTo({
      url: '../search/search',
    })
  },
  handleGetmarkers() {
    var _this = this;
    wx.request({
      url: 'http://localhost:3000/data',
      success: function(data) {
        console.log(data.data)
        let markers = data.data.map((item) => ({
          iconPath: "../../images/" + item.type + ".png",
          id: item.id,
          latitude: item.latitude,
          longitude: item.longitude,
          width: 40,
          height: 40
        }))
        // console.log(markers);
        _this.setData({
          markers
        })
        console.log(markers);
      }
    })
  },
  //点击控件图标
  controltap(e){
    console.log(e)
  },
  //点击marker图标
  markertap(e) {
    // console.log(e);
    wx.navigateTo({
      url: '../details/details?id=' + e.markerId,
    })
  }

})