const app = getApp();
  Page({
  data: {
    id: 2,
    title1: '选择困难症，也许只是一种习惯的养成而已',
    url: '/pages/information/article/article',
    isClick: false
  },
  onShow: function () {
    if (wx.getStorageSync('isClick2')) {
      this.setData({
        isClick: wx.getStorageSync('isClick2')
      })
    };
  },
    haveSave(e) {
      if (!this.data.isClick == true) {
        var c = app.data.save;
        c.push({ title1: this.data.title1, id: this.data.id, url: this.data.url });
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
      let isClick2 = this.data.isClick;
      wx.setStorageSync('isClick2', isClick2);//设置缓存
    }

})