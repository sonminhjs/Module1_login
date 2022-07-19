let click = document.getElementById("click");
let circle = document.getElementById("circle");
let count = 0;
click.addEventListener("click", function () {
  count++;
  if (count % 2 == 0) circle.style.background = "pink";
  else circle.style.background = "blue";
});

// const passField = document.getElementById("ipnElement");
// const showBtn = document.getElementById("imgElement");

// showBtn.onclick = () => {
//   if (passField.type === "password") {
//     passField.type = "text";
//     showBtn.classList.add("hide-btn");
//   } else {
//     passField.type = "password";
//     showBtn.classList.remove("hide-btn");
//   }
// };

function show() {
  var passField = document.getElementById("pwd");
  var showBtn = document.getElementById("EYE");
  if (passField.type == "password") {
    passField.type = "text";
    showBtn.src = "../image/show.png";
  } else {
    passField.type = "password";
    showBtn.src = "../image/hidden.png";
  }
}
function show_() {
  var passFields = document.getElementById("a");
  var showBtns = document.getElementById("e");
  if (passFields.type == "password") {
    passFields.type = "text";
    showBtns.src = "../image/show.png";
  } else {
    passFields.type = "password";
    showBtns.src = "../image/hidden.png";
  }
}
// ----------------------------------------------------------------------------

const usernameEle = document.getElementById("username");
const emailEle = document.getElementById("email");
const phoneEle = document.getElementById("phone");

const btnRegister = document.getElementById("btn-register");
const inputEles = document.querySelectorAll(".input-row");

btnRegister.addEventListener("click", function () {
  Array.from(inputEles).map((ele) => ele.classList.remove("success", "error"));
  let isValid = checkValidate();

  if (isValid) {
    alert("Gửi đăng ký thành công");
  }
});

function checkValidate() {
  let usernameValue = usernameEle.value;
  let emailValue = emailEle.value;
  let phoneValue = phoneEle.value;

  let isCheck = true;

  if (usernameValue == "") {
    setError(usernameEle, "Tên để trống em ei");
    isCheck = false;
  } else {
    setSuccess(usernameEle);
  }

  if (emailValue == "") {
    setError(emailEle, "Email để trống em ei");
    isCheck = false;
  } else if (!isEmail(emailValue)) {
    setError(emailEle, "Email sai định dạng em ei");
    isCheck = false;
  } else {
    setSuccess(emailEle);
  }

  if (phoneValue == "") {
    setError(phoneEle, "Số điện thoại không được trống em ei");
    isCheck = false;
  } else if (!isPhone(phoneValue)) {
    setError(phoneEle, "Số điện thoại sai định dạng em ei");
    isCheck = false;
  } else {
    setSuccess(phoneEle);
  }

  return isCheck;
}

function setSuccess(ele) {
  ele.parentNode.classList.add("success");
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add("error");
  parentEle.querySelector("small").innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
