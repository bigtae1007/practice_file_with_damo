const content = document.querySelectorAll('.menu_button');
const ACTIVE = "active"


content.forEach(function(contents){
    contents.addEventListener("click",function(){

        content.forEach(function(contents){
            contents.classList.remove(ACTIVE);
        });
        contents.classList.add(ACTIVE);
    })
    // contents.classList.remove(ACTIVE);
})
