const myform = document.querySelector('form');
myform.noValidate = true;
myform.addEventListener('submit', validateForm)
const pass1 = document.querySelector('#pwd');
const pass2 = document.querySelector('#pwdC');
let match = false;


function validateForm(e) {
    const form = e.target;
    if(pass1.value === pass2.value) {
        pass1.parentElement.classList.remove('nomatch')
        match = true;
    }
    else {
        e.preventDefault();
        pass1.parentElement.classList.add('nomatch') 
        match = false;
    } 
    if (form.checkValidity() && match) {
      alert("Tnx!")
    } 
    else {
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            }
            else {
                i.parentElement.classList.add('invalid')
            }
        });
    } 
       
}   