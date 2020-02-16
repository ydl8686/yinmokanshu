Page({
  data: {
    WeeklyBookLists: [
      {
        name: "追风筝的人",
        imagePath: "/images/zfzdr.jpg",
        id: 2154079
      },
      {
        name: "偷影子的人",
        imagePath: "/images/tyzdr.jpg",
        id: 10763902
      },
      {
        name: "兄弟",
        imagePath: "/images/xd.jpg",
        id: 20441957
      },
      {
        name:"小王子",
        imagePath:"/images/xwz.jpg",
        id: 3693974
      },
      {
        name:"许三观卖血记",
        imagePath:"/images/xsgmxj.jpg",
        id: 27141102
      },
      {
        name:"霍乱时期的爱情",
        imagePath:"/images/hlsqdaq.jpg",
        id: 10594787
      }
    ],
    count: 123,
    score: 99
  },
  f1: function (event) {
    var bookId = event.currentTarget.dataset.bookId
    console.log(bookId);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + bookId,
    })
  },
  onLoad:function(options){
    wx.request({
      url: "http://120.27.240.225:8444/api/books"
      ,
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          book: res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        wx.hideNavigationBarLoading()
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})