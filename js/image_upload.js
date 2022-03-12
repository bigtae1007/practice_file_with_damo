
function setDetailImage(event){
  for(var image of event.target.files){
    var reader = new FileReader();
    
    reader.onload = function(event){
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      img.setAttribute("class", "col_lg_6");
      document.querySelector("div#images_container").appendChild(img);
    };
    
    // console.log(image);
    reader.readAsDataURL(image); 
  }
}