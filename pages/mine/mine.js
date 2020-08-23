// pages/mine/mine.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    array: app.globalData.array,
    term: app.globalData.term,
    def: app.globalData.def,
    itemNumForSets: [0,1,2,3], //this is for item listing in wxml
    sets: app.globalData.decks
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(app.globalData.decks.length)
    this.RetrieveCards()

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },


  //Called when loading set page
  RetrieveCards: function () {
    for (var i=0; i<app.globalData.decks.length; i++){
      DeckName = app.userInfo.nickName+ this.sets[i]
      itemNumForSets.push(i)
    }
    
    
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

   wx.setStorage({
     key:userInfo.nickName,
     data:sets
   })
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