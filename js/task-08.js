const refs = {
  form: document.querySelector(".login-form"),
};

const handleSubmit = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля, будь ласка!");
  }

  const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
  e.currentTarget.reset();
};

refs.form.addEventListener("submit", handleSubmit);
