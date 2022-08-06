let hour=document.getElementById("hour");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let ampm=document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();
    // let h=23;
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    ampm.innerText="AM";

    h=h<10 ? "0"+h : h;

    if(h>12){
        h=h-12;
        ampm.innerText="PM"
    }

    hour.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();