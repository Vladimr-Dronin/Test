function formData(formSelectBox, formDataBox, formConsentBox, formDataBox_next, formDataBox_back) {
  const form = document.querySelector('.form-data');
  const formInput = form.querySelectorAll('input');

  const validateInput = ()=>{
    let i = true;
    formInput.forEach((item)=>{
      item.classList.remove('err');
      if(!item.value) {
        item.classList.add('err');
        i = false;
      }
    })
    return i;
  }

  form.addEventListener('click', (event)=>{
    let target = event.target;
    if(formDataBox_next == target) {
      if(validateInput()) {
        formDataBox.classList.remove('active');
        formDataBox.classList.add('enable');
        formConsentBox.classList.add('active');
      };
    }

    if(formDataBox_back == target) {
      formSelectBox.classList.add('active');
      formSelectBox.classList.remove('enable');
      formDataBox.classList.remove('active');
    }
  })
}

export default formData