// pages/mine/mine.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    itemNumForSets: app.globalData.yourDecks, //this is for item listing in wxml
    yourDecks: []
  },
  itemNumForSets: [], //this is for item listing in wxml
  yourDecks: [],
  userNickName: app.globalData.nickName,
  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.RetrieveCards()
    this.getDecks()
    this.saveDecks()
    console.log("Onload() is running!")
  },


  //Called when loading set page
  getDecks: function () {
    try{
      for (var i=0; i<this.yourDecks.length; i++){
        this.itemNumForSets.push(i)
      }
      this.setData({
        itemNumForSets: this.itemNumForSets,
        yourDecks: this.yourDecks
      })
      getApp().globalData.itemNumForSets = this.itemNumForSets
    }catch(e){
      console.warn("GetDecks() has "+ e)
    }
    
    
  },

  RetrieveCards: function () {
    console.log(app.globalData.nickName)
    console.log(this.yourDecks)
    console.log("yourDecks currently in RetrieveCards() is: "+this.yourDecks)
    this.yourDecks = wx.getStorageSync(app.globalData.nickName)
    if(this.yourDecks == undefined){
      this.yourDecks = []
    }
    console.log(this.yourDecks)
  },

  saveDecks: function () {
    wx.setStorageSync(app.globalData.nickName, this.yourDecks)
    console.log(this.yourDecks)
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("Onshow() is running!")
    try{
      if(app.globalData.userInput.length>0){
        this.yourDecks.push(app.globalData.userInput)
        this.itemNumForSets.push(this.itemNumForSets.length)
        this.setData({
          yourDecks: this.yourDecks,
          itemNumForSets: this.itemNumForSets
        })
        getApp().globalData.userInput = ""
        this.saveDecks()
        console.log("yourDecks currently in onShow() is: "+this.yourDecks)
        console.log(getStorageSync(app.globalData.nickName))
      }
    }catch(e){
      console.warn("error on OnShow()"+e)
    }
    
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

   wx.setStorageSync({
     key:app.globalData.nickName,
     data:this.yourDecks
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

  },

  addDeck: function() {
    getApp().globalData.userInput = ""

    wx.navigateTo({
      url: '../input/input'
    })
   
    //this.yourDecks.push(app.globalData.userInput)
    //saveDecks()
    
  },

  directToDeck: function(e) {
    getApp().globalData.selectedDeckName = e.currentTarget.dataset.text
    console.log(e.currentTarget.dataset.text)
    wx.navigateTo({
      url: '../VocabList/VocabList'
    })
  }
})