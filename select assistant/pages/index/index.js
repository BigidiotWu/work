Page({
  data: {
    imgUrls: 
    ['images/5.png',
      'images/2.jpg',
      'images/3.jpeg'
    ],
    x_menus: [
      { title: '骰子', url1: 'images/骰子.png', url2:'../dices/dices'},
      { title: '转盘', url1: 'images/转盘.png', url2:'canvas/canvas'}],
    x2_menus:[
      { title: '随机数', url1: 'images/随机.png', url2: '../randomNum/randomNum'},
      { title: '场景', url1: 'images/场景1.png', url2: 'scene/scene'},
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  }
}
)

