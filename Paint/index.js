var features = document.querySelector('features');
const draw = document.querySelector('#draw');

const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const num = document.querySelector('#num');
const mycolor = document.querySelector('#color');
const reset = document.querySelector('#reset');
const rect = document.querySelector('#rect')
var surycanvas = document.querySelector('#surycanvas');
const syc = surycanvas.getContext('2d');
surycanvas.width = window.innerWidth/2;
surycanvas.height = window.innerHeight/2;


// window.addEventListener('load',drawing());

function drawing(){
    surycanvas.addEventListener('mousedown', (e)=>{
        eventDown = true;
        a = e.offsetX;
        b = e.offsetY;
        drawCircle(a,b);
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
}


draw.addEventListener('click',()=>{
    drawing();   
})

rect.addEventListener('click',(e)=>{
    drawRect();
})

let size = 10;
let eventDown = false;
let color = 'darkblue';
let a;
let b;


rect.addEventListener('click',(e)=>{
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
            drawRect(a,b,a2,b2);
            return;
            syc.clearRect(0,0,surycanvas.width,surycanvas.height);
            a = a2;
            b = b2;
        }
    })
})

function drawRect(a,b,a2,b2){
    console.log('rect');
    var width = a2 - a;
    var height = b2 - b;
    syc.beginPath();
    syc.strokeRect(a, b, width, height);
    syc.strokeStyle = color;
    syc.closePath();
}

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
    syc.lineWidth = size*2;
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
