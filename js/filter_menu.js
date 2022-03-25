const img = document.querySelectorAll('.img_chg');

img.forEach(function(imgs){
  imgs.addEventListener("click", function(){
    let compare = imgs.src.slice(-9);
    let chg_img = imgs.src.slice(0,-9);
    
    if(compare == 'black.png'){
      imgs.src = chg_img + 'color.png'
    }else{
      imgs.src = chg_img + 'black.png'      
    }
  })
})