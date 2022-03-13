const btn = document.querySelectorAll('.more_btn');
const text = document.querySelectorAll('.more_text');

btn.forEach(function(btns){
  btns.addEventListener('click',function(){
    if(btns.innerHTML === '▽'){
      btns.innerHTML = '▲';
    }else{
      btns.innerHTML = '▽';
    }

    for(let i = 0 ; i < btn.length ; i++){
      if(btn[i].innerHTML === '▲'){
        text[i].style.height = 'auto';
      }else{
        text[i].style.height = '0';
      }
    }
  })
})