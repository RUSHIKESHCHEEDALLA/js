const form=document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const h8=parseInt(document.querySelector('#height').value);
  const w8=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');
  if (isNaN(h8) || h8==='' || h8<=0){
    result.innerHTML=`PLEASE GIVE CORRECT INPUT ${h8}`;
  }else if (isNaN(w8) || w8==='' || w8<=0){
    result.innerHTML=`PLEASE GIVE CORRECT INPUT ${w8}`;
  }else{
    const ans= (w8 / ((h8 * h8) / 10000)).toFixed(2);
    result.innerHTML=`${ans}`;
    console.log(ans);
    if (ans<18.6){
      const red1=document.getElementById('1');
      red1.style.color="red";
    }else if (ans>=18.6 && ans<24.9){
      const red1=document.getElementById('2');
      red1.style.color="red";
    }else if (ans>=24.9){
      const red1=document.getElementById('3');
      red1.style.color="blue";
    }
  }
  
})
