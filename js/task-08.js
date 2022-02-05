const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  }
  const dataUser = {};
  formData.forEach((value, name) => {
    dataUser[name] = value;
  });

  console.log(dataUser);
  formRefs.reset();
}
