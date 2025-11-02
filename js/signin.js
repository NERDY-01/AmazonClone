window.onload = () => {
  localStorage.setItem("IsLogin", false);
  localStorage.setItem("email", "");
  localStorage.setItem("pass", "");
};

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  localStorage.setItem("email", "adminaccess@example.com");
  localStorage.setItem("pass", "helloworld");

  const password = dataObject.password;
  const email = dataObject.email;
  const storedMail = localStorage.getItem("email");
  const storedPass = localStorage.getItem("pass");
  if (email != storedMail || password != storedPass) {
    document.querySelector(".wrong-pass").innerHTML =
      "Email Or Password didn't Matched";

    document.querySelector(".wrong-pass").innerHTML =
      "Email Or Password didn't Matched";
    localStorage.setItem("IsLogin", false);
  } else {
    localStorage.setItem("IsLogin", true);
    document.querySelector(".wrong-pass").innerHTML = "";
    window.location.href = "amazonHome.html";
  }
});
