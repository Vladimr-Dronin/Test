import './styles/style-reset.css'
import './styles/custom-radio.css'
import './styles/custom-checkbox.css'
import './styles/loader.css'
import './styles/styles.scss'

import maskeInput from './forms/maske_input'
import formSelect from './forms/form_select'
import formData from './forms/form_data'
import formConsent from './forms/form-consent'


const formSelectBox = document.querySelector('.item1-content'),
      formDataBox = document.querySelector('.item2-content'),
      formConsentBox = document.querySelector('.item3-content');

const formSelectBox_next = formSelectBox.querySelector('.form-select__next');

const formDataBox_next = formDataBox.querySelector('.form-data__next'),
      formDataBox_back = formDataBox.querySelector('.form-data__back');

const formConsentBox_next = formConsentBox.querySelector('.form-consent__next'),
      formConsentBox_back = formConsentBox.querySelector('.form-consent__back');

const formBase = document.querySelector('form'),
      formSuccess = document.querySelector('.success-form');

maskeInput();
formSelect(formSelectBox, formDataBox, formSelectBox_next);
formData(formSelectBox, formDataBox, formConsentBox, formDataBox_next, formDataBox_back);
formConsent(formBase, formSuccess, formConsentBox, formDataBox, formConsentBox_next, formConsentBox_back);
