const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');



let color='black'
let size=20
let x
let y
let isPressed= false

canvas.addEventListener('mouseup',(e)=>
{
    isPressed=false
    x=undefined
    y=undefined
})

canvas.addEventListener('mousemove',(e)=>
{
   if(isPressed)
   {
    const x2=e.offsetX
    const y2=e.offsetY
    drawingCirclesx(x,y,x2,y2)
    drawLine(x,y)

    x=x2
    y=y2

   }
})

canvas.addEventListener('mousedown',(e)=>
{
    isPressed=true
    x2=e.offsetX
    y2=e.offsetY
} )
colorEl.addEventListener('change', (e)=> 
color=e.target.value)

increaseBtn.addEventListener('click', (e)=>{
    size+=1

    if(size>50)
    {
        size=50
    }

    updateSize()
})

decreaseBtn.addEventListener('click', (e)=>{
    size-=1

    if(size>50)
    {
        size=50
    }

    updateSize()
})

clearEl.addEventListener('click', (e)=>{
ctx.clearRect(0,0,canvas.width,canvas.height)

})

function drawingCirclesx(x,y)
{
    ctx.beginPath();
    ctx.arc(x,y,size,0, Math.PI*2)
    ctx.fillStyle=color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){

    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=color
    ctx.lineWidth=size*2
    ctx.Stroke()


}

function updateSize(){
    sizeEl.innerText=size
}







