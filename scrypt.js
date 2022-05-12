var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')
c.fillRect(100,100,100,100)
c.fillRect(200,200,100,100)
c.fillStyle = 'rgba(0,255,0,0.5)'
c.fillRect(400,400,200,200)
c.fillRect(800,600,150,300)

c.beginPath()
c.moveTo(150,400)
c.lineTo(50,260)
c.lineTo(500,150)
c.strokeStyle = "#fa34a3"
c.stroke()


c.beginPath()
c.arc(300,300,30,0, Math.PI * 2, false)
c.strokeStyle = 'blue'
c.stroke()