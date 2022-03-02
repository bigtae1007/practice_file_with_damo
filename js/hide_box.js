function display_box() { // 박스 display block or none
  const box = document.querySelectorAll('.price_box');

  if(box[0].style.display === 'none' ){
    for(let i = 0 ; i  < box.length ; i ++){
      box[i].style.display = "block";
    }
  }else{
    for(let j = 0 ; j < box.length ; j++){
      box[j].style.display = "none";
    }
  }
}
const btn = document.getElementById('display_btn');
btn.addEventListener("click", display_box);