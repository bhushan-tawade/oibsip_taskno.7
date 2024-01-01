const userId = document.getElementsByClassName("user-id")[0];
const userPassword = document.getElementsByClassName("user-password")[0];
const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.querySelector('.user-password');



function submit() {
    if (userId.value === '') {
        alert("User id required.");
    }
    else if (userPassword.value === '') {
        alert("password is required");
    }
    else {
        alert("Login sucessfully");
    }
}


showPasswordCheckbox.addEventListener('click', function () {
    const type = this.checked ? 'text' : 'password';
    passwordInput.type = type;
});