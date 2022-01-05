const form = document.querySelector(".form");
const email = document.querySelector(".email");
const text_error = document.querySelector(".text-error");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateEmail(email.value)) {
    text_error.style.display = null;
  } else {
    text_error.style.display = "block";
  }
});
