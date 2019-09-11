// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  pagejump:function(){
   wx.redirectTo({
     url: '../about/about',
   })
    
  }
})