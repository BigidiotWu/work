Page({
  data: {
    imgUrls:
    ['images/111.png',
     'images/222.png',
     'images/333.png',
      'images/44.png',
    ],
x_menus: [
  { title: '买不买', icon: 'images/1.png', url2:'buy/buy' },
  { title: '吃什么', icon: 'images/2.png', classes: 'two_side', url2: 'eat/eat' },
  { title: '更多', icon: 'images/3.png', url2: 'eat/eat'  },
],
indicatorDots: true,
vertical: false,
autoplay: true,
circular: false,
interval: 3000,
duration: 500,
previousMargin: 0,
nextMargin: 0},
  
})