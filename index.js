const form = document.querySelector('form');
const inputList = document.getElementsByTagName('input');


//phone country code
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "ro",
  preferredCountries: ["ro", "gb", "de", "fr"],
  utilsScript:
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

//copy-right year auto-update
const currentYear =  new Date().getFullYear();
document.querySelector('#copyright-year').innerHTML = currentYear;

function calculateAge(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}


// EmailJS service
function sendMail() {
  const params = {
  firstName: document.querySelector('#firstName')?.value,
  lastName: document.querySelector('#lastName')?.value,
  email: document.querySelector('#email')?.value,
  countryCode: document.querySelector('.iti__selected-flag')?.title,
  phone: document.querySelector('#phone')?.value,
  courseType: document.querySelector('#course-type')?.value,
  dob: document.querySelector('#dob')?.value,
  age: calculateAge(new Date(document.querySelector('#dob')?.value,)),
  message: document.querySelector('#message')?.value,
  gdpr: document.querySelector('#gdpr')?.checked ? 'DA' : 'NU'
  }

  const serviceId = 'service_uu7ki1n';
  const templateId = 'template_se5geg2';

  emailjs.send(serviceId, templateId, params)
  .then( res => {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = null;
    document.querySelector('#course-type').value  = null;
    document.querySelector('#dob').value = null;
    document.querySelector('#message').value = '';
    document.querySelector('#gdpr').checked = false;
    console.log(res);
  })
  .catch (error => console.log(error));
}








// form.addEventListener('submit', event => {
//   event.preventDefault();
//   for (let item of inputList) {
//     if (item.id === 'consent' && item.checked === false) {
//       document.querySelector('#consent-error').style.display = 'block';
//       return;
//     }else{
//       document.querySelector('#form-error').style.display = 'none';
//     }
//     if (item.value === '') {
//       document.querySelector('#form-error').style.display = 'block';
//       return;
//     } else{
//       document.querySelector('#form-error').style.display = 'none';
//     }
//   }
  
//   const user ={
//     first_name: document.querySelector('#firstname')?.value,
//     last_name: document.querySelector('#lastname')?.value,
//     nickname: document.querySelector('#nickname')?.value,
//     email: document.querySelector('#email')?.value,
//     phone_number: +document.querySelector('#phone')?.value,
//     dob: document.querySelector('#dob')?.value,
//     gdpr_consent: document.querySelector('#consent').checked,
//     country_code: document.querySelector('.iti__selected-flag').title
//   }
//   console.log()
//   axios.post('http://89.33.44.114:8000/lead/', user)
//   .then((response) => {
//     console.log(response);
//     console.log('POST succesful')
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
// });