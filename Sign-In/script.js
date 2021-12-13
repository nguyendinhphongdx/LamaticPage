function onSubmit() {
  const element = document.getElementsByName("contact-form")[0];
  Swal.fire(
    "Câu hỏi đã được gửi!",
    "Chúng tôi sẽ hồi đáp sớm nhất có thể.",
    "success"
  );
  element.reset();
  return false;
}
function onSubmitSignIn() {
  const form = document.getElementById("formSignIn");
  console.log([form]);
  const firtName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  if (firtName.length < 3 && lastName.length < 3) {
    alert("Tên không ngắn hơn 3 kí tự");
    return;
  }
  if (password.length < 5) {
    alert("Mật khẩu không ngắn hơn 5 kí tự!");
    return;
  }
  if (password !== confirm) {
    alert("Mật khẩu xác nhận không chính xác!");
    return;
  }
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  users.push({
    firtName,
    lastName,
    email,
    password,
  });
  localStorage.setItem("users",JSON.stringify(users));
  const element = document.getElementsByName("contact-form")[0];
  Swal.fire(
    "Đăng ký thành công!",
    "Hãy vào website để nhận những ưu đãi hấp dẫn",
    "success"
  );
  element.reset();
//   window.location=window.location.host+'/LoginLamatic/Login.html';
  return false;
}

