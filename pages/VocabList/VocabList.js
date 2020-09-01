// pages/VocabList/VocabList.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    array: [],
    term: [],
    def: [],
  },

  array: [],
  term: [],
  def: [],
  userNickName: app.globalData.nickName,

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    app.globalData.isChangeTerm=false
    this.RetrievetermsAndDef()
    this.gettermsAndDef()
    this.savetermsAndDef()
    console.log("Onload() is running!")
  },
  gettermsAndDef: function () {
    try{
      for (var i=0; i<app.globalData.term.length; i++){
        this.array.push(i)
      }
      this.setData({
        array: this.array,
        term: app.globalData.term
      })
      getApp().globalData.array = this.array
    }catch(e){
      console.warn("gettermsAndDef() has "+ e)
    }
    
    
  },

  RetrievetermsAndDef: function () {
    console.log(app.globalData.selectedDeckName)
    console.log(app.globalData.term)
    console.log("term currently in RetrievetermsAndDef() is: "+app.globalData.term)
    this.term = wx.getStorageSync(app.globalData.nickName+app.globalData.selectedDeckName)
    if(this.term == undefined || this.term == ""){
      this.term = []
    }
    if(this.def == undefined || this.def == ""){
      this.def = []
    }
    if(app.globalData.selectedDeckName == undefined){
      app.globalData.selectedDeckName = "error!"
    }
    console.log(app.globalData.selectedDeckName)
    console.log(this.term)
  },

  savetermsAndDef: function () {
    wx.setStorageSync(app.globalData.nickName+app.globalData.selectedDeckName, [this.term,this.def])
    console.log(app.globalData.term)
  },
  onHide: function () {

    wx.setStorageSync({
      key:app.globalData.nickName+app.globalData.selectedDeckName,
      data:[this.term,this.def]
    })
    
   },

  /**
   * Lifecycle function--Called when page show sald;fhawporgkja;lgrkja;ogihas;fkjas;ldfhasgruhaslkfhasdl;fkhasofih
   */
  onShow: function () {
    console.log("Onshow() is running!")
    //try{
      if(app.globalData.userInput.length>0){
        console.log("Got in first loop")
        console.log(app.globalData.isChangeTerm)
        if (app.globalData.isChangeTerm){
          console.log("hello?")
          this.term.push(app.globalData.userInput)
          this.def.push("Insert Definition...")
          console.log(this.def)
          this.array.push(this.array.length)
          this.setData({
            term: this.term,
            def: this.def,
            array: this.array
          })
          getApp().globalData.userInput = ""
          getApp().globalData.isChangeTerm = false
          this.savetermsAndDef()
          console.log("term currently in onShow() is: "+this.term
          )
          console.log(wx.getStorageSync(app.globalData.nickName+app.globalData.selectedDeckName))
        }else{
          
        }
        
      }
    // }catch(e){
    //   console.warn("error on OnShow()"+e)
    // }
  },
  addTerm: function() {
    getApp().globalData.userInput = ""
    getApp().globalData.isChangeTerm = true
    wx.navigateTo({
      url: '../input/input'
    })
    
  },
  editDef: function(e) {
    e.currentTarget.dataset.text = app.globalData.userInput
    getApp().globalData.userInput = ""
    getApp().globalData.isChangeTerm = false
    wx.navigateTo({
      url: '../input/input'
    })
    
  }
})