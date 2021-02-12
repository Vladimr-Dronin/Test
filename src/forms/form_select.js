function formSelect(formSelectBox, formDataBox, formSelectBox_next) {

  const form = document.querySelector('.form-select');
  const radio1 = document.querySelector('#radio_1'),
        radio2 = document.querySelector('#radio_2')

  const clickRadio = (radio_1, radio_2, target)=>{
    if(radio_1 == target || radio_1.parentNode == target) {
      radio_1.parentNode.classList.add('active');
      radio_2.parentNode.classList.remove('active');
      radio_1.checked = true;
   }
  }

  form.addEventListener('click', (event)=>{
    let target = event.target;
    clickRadio(radio1, radio2, target);
    clickRadio(radio2, radio1, target);

    if(formSelectBox_next == target) {
      formSelectBox.classList.remove('active');
      formSelectBox.classList.add('enable');
      formDataBox.classList.add('active');
    }
  })
}

export default formSelect