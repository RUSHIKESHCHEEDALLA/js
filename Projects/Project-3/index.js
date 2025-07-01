const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for (let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// console.log(randomColor());
let id;
document.querySelector('#start').addEventListener('click',function(){
    console.log("STARTED");
    const change=function(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!id){
            id=setInterval(change,1000);
    }
});
document.querySelector('#stop').addEventListener('click',function(){
    console.log("STOPED");
    document.body.style.backgroundColor='black';
    clearInterval(id);
    id=null;
    // document.body.style.backgroundColor='black';
});














