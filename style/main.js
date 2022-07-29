const inputEmail = document.querySelector('#email-input'),
    submitButton = document.querySelector("#email-button"),
    emailContainer = document.querySelector(".email__container"),
    errorInfo = document.querySelector(".error-info"),
    iconError = document.querySelector(".icon-error");


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

submitButton.addEventListener('click', function(){
    if (!validateEmail(inputEmail.value)) {
        iconError.style.display = 'block';
        errorInfo.style.display = 'block';
        inputEmail.style.border = '1px solid red';
    }
    else{
        iconError.style.display = 'none';
        errorInfo.style.display = 'none';
        inputEmail.style.border = 'solid hsl(0, 36%, 70%) 1px';
    }
})