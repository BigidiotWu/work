// pages/index/scene/buy/buy.js
var result = ["买", "不买"];
Page({
  data: {
    imgUrls:
    ['images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
    ],
    hideBtn2: true,
    hideBtn3: true,
    result1:"当结果出来时，你的心中会有抉择的",
    num1: 1,
    num2: 2,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0

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
    })
    this.setData(
      {result1:"正在玩命做决定"}
    )
    this.setData({
      hideBtn2: true
    })
    this.setData({
      hideBtn3: true
    })
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

    var result2 = min -1+ Math.round(Math.random() * (max - min));
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
          result1: result[result2]
        })
        if(this.data.result1=='买')
        {this.setData({
          hideBtn2: false
        })}
        else
        {
          this.setData({
            hideBtn3: false
          })
        }

      }
    }
  },

  
})
