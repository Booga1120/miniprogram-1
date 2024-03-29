//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ifLogin: false,
    motto: app.globalData.yourDecks,
    userInfo: {},
    userID: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindButtonTap: function() {
    userID: app.globalData.userID;
    console.log(wx.cloud.cloudID)
    wx.navigateTo({
      url: '../next/next'
    })
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      app.globalData.nickName = app.globalData.userInfo.nickName
      console.log(app.globalData.nickName + "'s username recorded!")
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.nickName = res.userInfo.nickName
        console.log(res.userInfo.nickName + "'s username recorded!")
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.nickName = res.userInfo.nickName
          console.log(res.userInfo.nickName + "'s username recorded!")
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(app.globalData.nickName)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
