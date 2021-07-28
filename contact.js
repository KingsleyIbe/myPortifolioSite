// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const pnumber = document.getElementById('pnumber');
const messageBody = document.getElementById('messageBody');
const formId = document.getElementById('formId');
const errorElement = document.getElementById('error');

formId.addEventListener('submit', (e) => {
    let messages = [];
    if (fname.value === '' || fname.value == null) {
        messages.push('***Please enter your name***')
    } else if (email.value === '' || email.value == null) {
        messages.push('***Please enter your email***')
    } else if (pnumber.value === '' || pnumber.value == null) {
        messages.push('***Please enter your mobile number***')
    } else if (messageBody.value === '' || messageBody.value == null) {
        messages.push('***Please enter your message***')
    }
    if (messages.length > 0) {

        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});