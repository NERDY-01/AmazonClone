window.onload = () => {
  console.log(localStorage.getItem("IsLogin"));

  if (localStorage.getItem("IsLogin") != "true") {
    window.location.href = "signin.html";
  } else {
  }
};
