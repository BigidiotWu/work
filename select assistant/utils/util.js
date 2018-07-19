const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}



function shake(callback) {
  // 摇一摇
  var lastX = 0,
    lastY = 0,
    lastZ = 0;
  wx.onAccelerometerChange(function (res) {
    if (lastX) {
      var deltaX = Math.abs(res.x - lastX),
        deltaY = Math.abs(res.y - lastY),
        deltaZ = Math.abs(res.z - lastZ);
      if (deltaX > 0.9 || deltaY > 0.9 || deltaZ > 0.9) {
        callback();
      }
    }
    lastX = res.x;
    lastY = res.y;
    lastZ = res.z;
  })
}

module.exports = {
  shake: shake
}