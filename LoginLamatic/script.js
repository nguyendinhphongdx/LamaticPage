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

function onSubmitLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.length == 0) {
        ToastMessage("Tài khoản không được bỏ trống!");
        return;
    }
    if (password.length == 0) {
        ToastMessage("Mật khẩu không được bỏ trống!");
        return;
    }
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const findUser = users.find(item => item.email == email && item.password == password);
    if (findUser) {
        const element = document.getElementsByName("contact-form")[0];
        Swal.fire(
            "Đăng nhập thành công!",
            "Chúc bạn enjoy với thứ mình muốn.",
            "success"
        );
        element.reset();
    } else {
        ToastMessage("Thông tin tài khoản không chính xác!");
    }
    return false;
}