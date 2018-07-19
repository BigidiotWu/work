"use strict";
var index_obj = require('function/information_index.js')
var figure_obj = require('function/information_figure.js')
var indexx_obj = require('function/article_index.js')
var figuree_obj = require('function/article_figure.js')
var api = require('api/information_api.js');
var menu_static = 0;

Page({


  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        console.log(res, new Date())
      }
    })
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({ hid: true });
    }, 2000);
  },

  onShow: function () {
    var that = this;
    setTimeout(function () {
      that.setData({ dis: "display_none" });
    }, 1500);

    if (figure_obj.get_figure_cookie()) {
      this.setData({ dis: "display_none" });
    } else {
      figure_obj.set_figure_cookie();
    }
    if (figuree_obj.get_figure_cookie()) {
      this.setData({ dis: "display_none" });
    } else {
      figuree_obj.set_figure_cookie();
    }
  },

  detail: function (event) {
    index_obj.redirectTo_index(event);
  },

  article: function (event) {
    indexx_obj.redirectTo_index(event);
  },

});
