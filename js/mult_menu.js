const content = document.querySelectorAll('.menu_button');
const ACTIVE = "active"
const menu = document.querySelectorAll('.menu_content');

content.forEach(function(contents){
    contents.addEventListener("click",function(){

        content.forEach(function(contents){
            contents.classList.remove(ACTIVE);
        });
        contents.classList.add(ACTIVE);

        for(let i = 0 ; i < content.length ; i ++){
            if(content[i].classList.contains(ACTIVE) === true){
                menu[i].classList.add('display');
            }else{
                menu[i].classList.remove('display');
            }
        }
    })
    // contents.classList.remove(ACTIVE);
})
