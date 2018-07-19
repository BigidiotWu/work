const app = getApp();
Page({
  data: {
    id: 1,
    title1: '选择困难症的三大星座',
    url:'/pages/information/detail/detail',
    isClick: false
  },
  onShow: function (){
    if (wx.getStorageSync('isClick')) {
      this.setData({
        isClick: wx.getStorageSync('isClick')
      })
    };
  },
  haveSave(event) {
    if (!this.data.isClick == true) {
      var c = app.data.save;
      c.push({ title1: this.data.title1, id: this.data.id,url:this.data.url });
      console.log(app.data.save);

      wx.showToast({
        title: '已收藏',
      });

    } else {
      wx.showToast({
        title: '已取消收藏',
      });
    }
    this.setData({
      isClick: !this.data.isClick
    })
    let isClick1=this.data.isClick;
    wx.setStorageSync('isClick', isClick1);//设置缓存

  }

})