function kaydetVeGit(link) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("name", username);

  if (username == "serdar" && password == "123456") {
    window.location.href = link;
  } else {
    alert("hatalı kullanıcı adı ve şifre");
  }
}
