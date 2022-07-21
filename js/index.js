const icon_eye = document.getElementsByClassName("icon_eye");
// console.log("icon_eye", icon_eye);
Object.keys(icon_eye).forEach((element) => {
  const thisElement = icon_eye[element];
  // console.log("thisElement", thisElement);

  thisElement.addEventListener("click", function () {
    const inputElement = thisElement.previousElementSibling;
    const typeInputElement = inputElement.type;
    // console.log("========", inputElement, typeInputElement);

    if (typeInputElement === "password") {
      inputElement.type = "text";
      thisElement.src = "../image/show.png";
    } else {
      inputElement.type = "password";
      thisElement.src = "../image/hidden.png";
    }
  });
});

// -----------------------------------------------------

const checkBox = document.getElementsByClassName("checkbox-round");
const array = [...checkBox];
array.map((element) => {
  element.addEventListener("change", function () {
    this.nextElementSibling.nextElementSibling.classList.toggle("hidden");
  });
});
