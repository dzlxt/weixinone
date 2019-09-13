export default function request(opions){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: opions.url,
      method:opions.method || "get",
      data: opions.data || {},
      success:resolve,
      fail:reject
    })
  })
}