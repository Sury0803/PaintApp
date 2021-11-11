var features = document.querySelector('features');

const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const num = document.querySelector('#num');
const mycolor = document.querySelector('#color');
const reset = document.querySelector('#reset');

var surycanvas = document.querySelector('#surycanvas');
const syc = surycanvas.getContext('2d');
surycanvas.width = window.innerWidth/2;
surycanvas.height = window.innerHeight/2;

let size = 10;
let eventDown = false;
let color = 'darkblue';
let a;
let b;

surycanvas.addEventListener('mousedown', (e)=>{
    eventDown = true;
    a = e.offsetX;
    b = e.offsetY;
});

surycanvas.addEventListener('mouseup', (e)=>{
    eventDown = false ;
    a = undefined;
    b = undefined;
})

surycanvas.addEventListener('mousemove', (e)=>{
    if(eventDown){
        const a2 = e.offsetX;
        const b2 = e.offsetY;

        drawCircle(a2,b2);
        drawLine(a, b, a2, b2);

        a = a2;
        b = b2;
    }
})

function drawCircle(a,b){
    syc.beginPath();
    syc.arc(a,b,size,0,Math.PI * 2);
    syc.fillStyle = color;
    syc.fill();
}

function drawLine(a,b,a2,b2){
    syc.beginPath();
    syc.moveTo(a,b);
    syc.lineTo(a2,b2);
    syc.strokeStyle = color;
    syc.lineWidth = num*2;
    syc.stroke();
}

function updateSizeOnScreen() {
    num.innerText = size;
}

inc.addEventListener('click', () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

dec.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
})

mycolor.addEventListener('change', (e) => color = e.target.value);

reset.addEventListener('click', () => syc.clearRect(0, 0, surycanvas.width, surycanvas.height));