Page({
  data:{

  },
  onLoad:function(options){
    console.log(options.id)
    this.setData({
      bid:options.id
    })

    var that=this

    wx.request({
      url: "https://api.douban.com/v2/book/"+options.id
      +"?apikey=0df993c66c0c636e29ecbb5344252a4a"
      ,
      header:{
        "content-type":"json"
      },
      success:function(res){
        console.log(res)
          if(res.statusCode==200){
          that.setData({
            book: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.title
          })
          wx.hideNavigationBarLoading()
        }
      },
      fail:function(){

      },
      complete:function(){

      }
    })
    wx.showNavigationBarLoading()
  }
})