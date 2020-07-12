// pages/mine/mine.js
Page({

  /**
   * Page initial data
   */
  data: {
    array: [0, 1, 2, 3, 4],
    term: ["a", "b", "c", "d", "..."],
    def: ["a1", "b1", "c1", "d", "......"],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },
  //Called when loading set page
  ShowSet: function () {
    wx.setStorage({
      key: userInfo.nickName,
      data: SetWithName
      })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    array: [0, 1, 2, 3, 4];
    term: ["a", "b", "c", "d", "..."];
    def: ["a1", "b1", "c1", "d", "......"];
  },
  

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})