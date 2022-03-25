function selectAll(selectAll) {
  const checkboxes = document.querySelectorAll('.main_filter');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

function checkSelectAll() {

  const checklist = document.querySelectorAll('input[name="checker"]');
  const checked = document.querySelectorAll('input[name="checker"]:checked');
  const selectAll = document.querySelector('input[name="selectAll"]');
  
  if(checklist.length === checked.length){
    selectAll.checked = true;
  }else{
    selectAll.checked = false;
  }
}
