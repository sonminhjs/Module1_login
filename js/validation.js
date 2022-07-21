function validateEmailRegex(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function validate(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  // console.log("abcabc", validateEmailRegex(email));
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let validateUsername = "";
  let validateEmail = "";
  let validatePassword = "";
  let validateConfirm = "";

  if (username === "") validateUsername = "Không được để trống em ei";
  else if (username.length < 3 && username.length > 0)
    validateUsername = "Tên phải >= 3 ký tự";
  else if (username.length > 30) validateUsername = "Tên nhỏ hơn 30 ký tự";

  if (email === "") {
    validateEmail = "Không được để trống em ei";
  } else if (email.length < 8) {
    validateEmail = "Email phải >= 8 ký tự";
  } else if (email.length > 50) {
    validateEmail = "Email phải < 50 ký tự";
  } else if (!validateEmailRegex(email)) {
    validateEmail = "Email của bạn sai định dạng";
  }

  if (password === "") validatePassword = "Không được để trống em ei";
  else if (password.length < 8 && password.length > 0)
    validatePassword = "Mật khẩu phải >= 8 ký tự";
  else if (password.length > 20) validatePassword = "Mật khẩu phải < 20 ký tự";

  if (confirmPassword === "")
    validateConfirm = "Bạn chưa xác nhận lại mật khẩu";
  else if (confirmPassword.length < 8 && confirmPassword.length > 0)
    validateConfirm = "confirmPassword min = 8 ký tự";
  else if (confirmPassword !== password)
    validateConfirm = "Mật khẩu nhập lại không đúng";
  else if (confirmPassword.length > 20)
    validateConfirm = "confirmPassword max = 20 ký tự";

  let errUsername = document.getElementById("errUsername");
  errUsername.innerHTML = validateUsername;

  let errEmail = document.getElementById("errEmail");
  errEmail.innerHTML = validateEmail;

  let errPassword = document.getElementById("errPassword");
  errPassword.innerHTML = validatePassword;

  let errConfirm = document.getElementById("errConfirm");
  errConfirm.innerHTML = validateConfirm;
}

const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmpassword");

const form = document.querySelector("#btnRegister");

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 30;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Không được để trống nhé em.");
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Tên phải có số ký tự > ${min} và < ${max}`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const min = 8,
    max = 50;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email không được để trống nhé.");
  } else if (!isEmailValid(email.length, min, max)) {
    showError(emailEl, "Email sai rồi nhé.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const min = 8,
    max = 20;
  const password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, "Password không được để trống nhé");
  } else if (!isPasswordSecure(password.length, min, max)) {
    showError(passwordEl, "Password phải lớn hơn 8 ký tự nhé. ");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};
const checkConfirmPassword = () => {
  let valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Vui lòng thử lại em nhé.");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Mật khẩu không khớp.");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};
const isEmailValid = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");
  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
  // validate fields
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};
form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "confirm-password":
        checkConfirmPassword();
        break;
    }
  })
);
