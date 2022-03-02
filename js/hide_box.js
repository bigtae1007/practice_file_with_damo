function display_box() { // 박스 display block or none
  const box = document.querySelectorAll('.price_box');

  if(box[0].style.display === 'block' ){
    for(let i = 0 ; i  < box.length ; i ++){
      box[i].style.display = "none";
    }
  }else{
    for(let j = 0 ; j < box.length ; j++){
      box[j].style.display = "block";
    }
  }
}

function display_img(){
  const img = document.getElementById('heart_icon');
  if(img.style.display === 'block'){
    img.style.display = 'none'
  }else{img.style.display = 'block'
  }
}



const btn = document.getElementById('display_btn');
btn.addEventListener("click", display_box);

