import * as $ from 'jquery'
const plugin = require('../jquery.maskedinput')

function maskeInput(){
  const inputs_text = document.querySelectorAll('#input_text');

  $("#phone").mask("8(999) 999-9999");
  $('#series').mask('99-99');
  $('#number').mask('999999');
  $('#day').mask('99');
  $('#month').mask('99');
  $('#year').mask('9999');
  
  inputs_text.forEach((item)=>{
    item.addEventListener('input', ()=>{
      item.value = item.value.replace(/\w/, '');
    })
  })
  
}

export default maskeInput