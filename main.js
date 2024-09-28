document.getElementById("icon").addEventListener("click", function () {
  document.getElementById("myDiv").classList.toggle("menu");
  document.getElementById("icon-color").classList.toggle("menu--icon");
});

document
  .getElementById("start-camera-btn")
  .addEventListener("click", function () {
    // Access the camera with the `facingMode: environment` to specify the back camera
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: { exact: "environment" } } })
      .then(function (stream) {
        const video = document.getElementById("camera");
        video.srcObject = stream;
        video.play();
      })
      .catch(function (error) {
        console.error("Error accessing the camera: ", error);
        alert(
          "Unable to access the back camera. Please check your device settings."
        );
      });
  });
