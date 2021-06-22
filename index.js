console.log("This is index.js file");
document.querySelector("body").style.overflow = "hidden";
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d")
let colorArray=[];
let maxRadius = 40;
let minRadius = 2;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Arc {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = Math.floor(Math.random() * 16777215).toString(16);
    }
    createCircle() {

        context.beginPath();
        context.fillStyle=`#${this.color}`;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
        
        this.animateCircle()

    }
    animateCircle() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
          // interact to check distance
          if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50 ){
              if(this.radius<maxRadius){
                this.radius+=1;
              }
          }else if(this.radius>this.minRadius){
              this.radius-=1;
          }

    }
}
let mouse={
    x:undefined,
    y:undefined
}
window.addEventListener("mousemove",(e)=>{
// console.log(e);
mouse.x = e.x;
mouse.y = e.y;
})


let circleArray = [];
for (let i = 0; i < 1000; i++) {

    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    let radius = Math.random()*3+1;
    circleArray.push(new Arc(x,y,dx,dy,radius));

}
console.log(circleArray);
function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight);
    // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // context.fillStyle = `#${randomColor}`;
    for (let i = 0; i < circleArray.length; i++) {
       circleArray[i].createCircle();    
    }
  
 

}
animate();


























// let radius = 50;
// function animate() {
//     requestAnimationFrame(animate)
//     context.clearRect(0, 0, innerWidth, innerHeight);
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     context.fillStyle=`#${randomColor}`;
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI, false);
//     context.fill();
//     context.stroke();
//     x+=dx;
//     y+=dy;
//     if (x+radius > innerWidth||x-radius<0) {
//         dx = -dx;
//     }
//     if(y+radius>innerHeight||y-radius<0){
//         dy = -dy;
//     }
//     circle1.createCircle();

// }
// animate();