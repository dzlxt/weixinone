// pages/home/home.js
import request from "../../service/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  onLoad: function (opions){
   
   /* request({
      url: 'https://www.g0818.com/test'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })*/
},
 
  pagejump:function(){
   wx.redirectTo({
     url: '../about/about',
   })
    
  }
})