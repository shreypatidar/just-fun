let btn1 = document.querySelector(".btn1");

let body=document.querySelector("body");
let mode="light";
btn1.addEventListener("click",()=>{
    alert("thankyou and have a nice day");
});
let number="1";
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("mouseover", ()=>{
    if(number ==="1"){
        btn2.style.marginInline="-50px";
        number ="2";
    }
    else{
        btn2.style.marginLeft="50px";
        number ="1";
    }
    
});

btn2.addEventListener("click",()=>{
    alert("YEs you win ");
})
