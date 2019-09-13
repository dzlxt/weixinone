
const TOKEN = 'token'
App({

  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !==0){
      console.log("执行了---")
        wx.request({
          url: 'http://123.207.32.32:3000/auth',
          method:'post',
          header:{
            token
          },
          success:function(res){
            console.log(res)
          },
          fail:function(res){
            console.log(res)
          }
        })
      

    }else{
    console.log("执行了dengl")
    wx.login({
      success: (res)=>{
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:"post",
          data:{
            code
          },
          success:(res)=>{
          const token = res.data.token;
          this.globalData.token = token;
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
  },

})
