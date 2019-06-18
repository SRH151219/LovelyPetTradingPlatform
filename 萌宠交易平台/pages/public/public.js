// pages/public/public.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //发布信息的人的地址，经度，纬度
    address:"",
    latitude:"",
    longitude:"",
    //类型
    type:"",
    //说明
    explain:"",
    //联系方式
    telphone:""

  },
  //地址
  handleChooseAddress(){
    var _this = this;
    //打开地图选择位置。
    wx.chooseLocation({
      success: function(res) {
        //记录位置,精度,纬度
        _this.setData({
          address:res.address,
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
    })
  },
  //类型
  radioChange(e){
    // console.log(e);
    this.setData({
      type:e.detail.value
    })
  },
  //说明
  handleExplain(e){
    this.setData({
      explain:e.detail.value
    })
  },
  //联系方式
  handleTel(e){
    this.setData({
      telphone: e.detail.value
    })
  },
  //发布信息
  handleSendMsg(){
    let {address,longitude,latitude,type,explain,telphone} = this.data;
    wx.request({
      method: 'post',
      url: 'http://localhost:3000/data',
      data:{
        address,
        longitude,
        latitude,
        type,
        explain,
        telphone
      },
      success:function(data){
        //添加信息成功后，页面跳转
        wx.navigateTo({
          url: '../publicsuccess/success',
        })
      }
    })
  }

 
})