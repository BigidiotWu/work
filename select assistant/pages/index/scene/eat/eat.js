// pages/index/scene/eat/eat.js
Page(
  {
  data: {
  hideBtn2: true,
  input:[],
  num1: 1,
  num2:1 , 
  hideBtn: false,
  result:'?'
  },
  add_input:function()
  {var cb=this.data.input;
  console.log(cb);
  cb.push(this.data.input.length);
  this.setData({input:cb});},
  delect_input:function()
  {
    var cb = this.data.input;
    console.log(cb);
    cb.pop(this.data.input.length);
    this.setData({ input: cb });

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.timer = null;
    this.t = 50; //数字正常变化的时间间隔
    this.count = 0;// 数字正常变化的次数，大于这个次数后数字变化速度逐渐变慢
  },
   
  onHide: function () {
    // 页面隐藏
    clearInterval(this.timer);
    this.t = 50;
    this.count = 0;
  },

  start: function () {
    clearTimeout(this.timer);
    this.setData({
      hideBtn: true
    });
    this.setData({
      hideBtn2: true
    })
    
    this.setData({
      num2:this.data.input.length
    });
    this.roll();
  },

  roll: function () {
    var max, min;
    if (this.data.num1 < this.data.num2) {
      min = this.data.num1;
      max = this.data.num2;
    } else {
      min = this.data.num2;
      max = this.data.num1;
    }

    var result = min + Math.round(Math.random() * (max - min));
    this.setData({
      result: result
    })
    // 让数字先每50毫秒变化一次，如此变化50次后变化间隔逐渐变大，直到停止
    this.count++;
    if (this.count < 50) {
      this.timer = setTimeout(this.roll, 50);
    } else {
      this.t *= 1.5;
      if (this.t < 1500) {
        this.timer = setTimeout(this.roll, this.t);
      } else {
        this.t = 50;
        this.count = 0;
        this.setData({
          hideBtn: false
        })
          this.setData({
            hideBtn2: false
          })
        
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})