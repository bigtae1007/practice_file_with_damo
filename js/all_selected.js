function selectAll(selectAll) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
  if(document.getElementById('checker2').checked == true && document.getElementById('checker3').checked == true){
    document.getElementById('bt1').disabled = false;
    document.getElementById('bt1').style.backgroundColor = "rgb(1, 61, 160)"
  }else{
    document.getElementById('bt1').disabled = true;
    document.getElementById('bt1').style.backgroundColor = "rgba(48, 48, 49, 0.384)"
  }
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


  if(document.getElementById('checker2').checked == true && document.getElementById('checker3').checked == true){
    document.getElementById('bt1').disabled = false;
    document.getElementById('bt1').style.backgroundColor = "rgb(1, 61, 160)"
  }else{
    document.getElementById('bt1').disabled = true;
    document.getElementById('bt1').style.backgroundColor = "rgba(48, 48, 49, 0.384)"
  }
}
