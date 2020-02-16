Page({
  data: {
    WeeklyBookList: [
      {
        name: "追风筝的人",
        comment: "为你，千千万万遍",
        imagePath: "/images/zfzdr.jpg",
        isHighlyRecommended: true,
        id: 2154079
      },
      {
        name: "偷影子的人",
        comment: "一个会用风筝写出“我想你”的女孩子，永远都让人忘不了",
        imagePath: "/images/tyzdr.jpg",
        isHighlyRecommended: true,
        id: 10763902
      },
      {
        name: "兄弟",
        comment: "战乱年代的兄弟情",
        imagePath: "/images/xd.jpg",
        isHighlyRecommended: false,
        id:20441957
      }
    ],
    count: 123,
    score: 99
  },
  f1:function(event){
    var bookId=event.currentTarget.dataset.bookId
    console.log(bookId);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+bookId,
    })
  }
})