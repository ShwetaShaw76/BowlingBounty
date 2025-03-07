let rel=document.querySelector("#reload")
let ball=document.querySelector("#ball")
let pin1=document.querySelector("#pin1")
let pin2=document.querySelector("#pin2")
let pin3=document.querySelector("#pin3")
let pin4=document.querySelector("#pin4")
let pin5=document.querySelector("#pin5")

rel.addEventListener("click",()=>{
    ball.position="0 -2.5 18"
    ball.animation="property:position; to:0 -2.5 2; loop:false; dur:1000; elasticity:900"
    pin1.rotation="0 0 0"
    pin2.rotation="0 0 0"
    pin3.rotation="0 0 0"
    pin4.rotation="0 0 0"
    pin5.rotation="0 0 0"
    pin1.animation="property:rotation; from:0 0 0; to:30 30 30; dur:430; loop:false;delay:510"
    pin2.animation="property:rotation; from:0 0 0; to:45 -45 0; dur:400; loop:false ;delay:480"
    pin3.animation="property:rotation; from:0 0 0; to:-20 -20 0; dur:400; loop:false ;delay:480"
    pin4.animation="property:rotation; from:0 0 0; to:30 -30 0; dur:400; loop:false ;delay:550"
    pin5.animation="property:rotation; from:0 0 0; to:-40 -40 0; dur:400; loop:false ;delay:550"
})