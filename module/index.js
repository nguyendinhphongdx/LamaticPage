function ToastMessage(message) {
  document.getElementsByTagName("body")[0]
    .innerHTML +=` <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="https://cdn.pixabay.com/photo/2020/03/12/11/43/bell-4924849_1280.png" class="rounded me-2" alt="..." style="width:35px;height:35px">
        <strong class="me-auto">Bootstrap</strong>
        <small>1 second ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" id="message">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>`;
  var toastLiveExample = document.getElementById("liveToast");
  document.getElementById("message").innerHTML = message;
  var toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
}
