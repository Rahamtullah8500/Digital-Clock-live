const hour=document.getElementById("hours");
const min=document.getElementById("minutes");
const sec=document.getElementById("seconds");
const ap=document.getElementById("ampm");

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let pa ="AM";

     if (h>12){
        h=h-12
        pa="PM"
     }
     if (h<10){h="0"+h;}
     if (m<10){ m="0"+m}
     if (s<10){ s="0"+s}

     hour.innerHTML=h;
     min.innerHTML=m;
     sec.innerHTML=s;
     ap.innerHTML=pa;

     setTimeout( ()=>{
        clock()
     },1000)
}
clock()