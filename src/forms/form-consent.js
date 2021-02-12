function formConsent(formBase, formSuccess, formConsentBox, formDataBox, formConsentBox_next, formConsentBox_back) {
  const formCurrent = document.querySelector('.form-consent'),
        confirmation_btn = document.querySelector('#confirmation'),
        notification_btn = document.querySelector('#notification');

  const formBaseInput = formBase.querySelectorAll('input');
  const loader = document.querySelector('.loader-container');

  const inputChecked = (confirmation_btn, notification_btn, target)=>{
    if(confirmation_btn == target || confirmation_btn.parentNode == target){
      confirmation_btn.parentNode.classList.remove('err');
      if(confirmation_btn.parentNode.classList.contains('active')) {
        confirmation_btn.parentNode.classList.remove('active');
        confirmation_btn.checked = false;
      }else{
        confirmation_btn.parentNode.classList.add('active');
        confirmation_btn.checked = true;
      }
    }
    if(notification_btn == target || notification_btn.parentNode == target){
      notification_btn.parentNode.classList.remove('err');
      if(notification_btn.parentNode.classList.contains('active')) {
        notification_btn.parentNode.classList.remove('active');
        notification_btn.checked = false;
      }else{
        notification_btn.parentNode.classList.add('active');
        notification_btn.checked = true;
      }
    }
  }
  const validateInput = ()=>{
    let i = true;
    if(!confirmation_btn.checked) {
      i = false;
      confirmation_btn.parentNode.classList.add('err');
    }
    if(!notification_btn.checked) {
      i = false;
      notification_btn.parentNode.classList.add('err');
    }
    return i;
  };
  const clearInput = ()=>{
    formBaseInput.forEach(element => {
      if(element.type == 'value') {
        element.value = '';
      }else if(element.type == 'checkbox') {
        element.checked = false;
        element.parentNode.classList.remove('active');
      }
    });
  }
  let postData = async function(url, data) {
    loader.classList.add('active');
    let res = await fetch(url, {
      method: "POST",
      body: data
    })
    return await res.text();
  }
  formCurrent.addEventListener('click', (event)=>{
    let target = event.target;
    inputChecked(confirmation_btn, notification_btn, target);
    
    if(formConsentBox_next == target) {
      if(validateInput()) {
        formBase.style.display = 'none';
        formSuccess.classList.add('active');
      }
    }
    if(formConsentBox_back == target){
      formConsentBox.classList.remove('active');
      formDataBox.classList.remove('enable');
      formDataBox.classList.add('active');
      confirmation_btn.checked = false;
      notification_btn.checked = false;
      confirmation_btn.parentNode.classList.remove('active');
      notification_btn.parentNode.classList.remove('active');
    }
  })
  formBase.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(validateInput()) {
      let formData = new FormData(formBase);
      postData('server.php', formData)
        .then(res=>{
          console.log(res);
          clearInput();
          loader.classList.remove('active');
          formBase.style.display = 'none';
          formSuccess.classList.add('active');
      });
    };
  });
};

export default formConsent