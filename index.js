const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height
if (window.devicePixelRatio) {
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  canvas.height = height * window.devicePixelRatio
  canvas.width = width * window.devicePixelRatio
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
}
canvas.getContext('2d').imageSmoothingEnabled = true
let lineWidth = 3
let lineColor = '#fff'
let painting = false
// 落笔
canvas.onmousedown = (e) => {
  painting = true
  const event = e || window.event
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  const x = event.offsetX
  const y = event.offsetY
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineWidth = lineWidth
  ctx.strokeStyle = lineColor
}
// 移动
canvas.onmousemove = (e) => {
  if (!painting) {
    return
  }
  const event = e || window.event
  const x = event.offsetX
  const y = event.offsetY
  ctx.lineTo(x, y)
  ctx.stroke()
}
// 抬笔
canvas.onmouseup = () => {
  if (!painting) {
    return false
  }
  painting = false
  ctx.closePath()
}

// 离开画板
canvas.onmouseleave = () => {
  if (!painting) {
    return false
  }
  painting = false
  ctx.closePath()
}
