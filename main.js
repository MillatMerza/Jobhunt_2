document.getElementById("icon").addEventListener("click", function () {
  document.getElementById("myDiv").classList.toggle("menu");
  document.getElementById("icon-color").classList.toggle("menu--icon");
});

// QR Code scanner instance
// Automatically start the scanner without needing the user to click an extra button.
document.getElementById("startQRButton").addEventListener("click", function () {
  openPopup(); // Directly open the popup and start the QR scanner
});

document.getElementById("closeBtn").addEventListener("click", function () {
  closePopup();
});

function openPopup() {
  document.getElementById("popup").style.display = "flex";

  // Automatically request camera access and start the scanner
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .start(
      { facingMode: "environment" }, // Use the environment-facing camera (rear camera)
      {
        fps: 10, // Frames per second for scanning
        qrbox: { width: 250, height: 250 }, // QR code scanning box size
      },
      success,
      error
    )
    .catch((err) => {
      console.error("Unable to start scanning", err);
    });
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  // Stop the scanner when the popup is closed
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .stop()
    .then(() => {
      console.log("QR Code scanning stopped.");
    })
    .catch((err) => {
      console.error("Unable to stop scanning", err);
    });
}

function success(decodedText) {
  document.getElementById("result").innerHTML = `
      <h2>Success!</h2>
      <p><a href="${decodedText}" target="_blank">${decodedText}</a></p>
      `;

  // Stop the scanner after a successful scan
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .stop()
    .then(() => {
      console.log("QR Code scanning stopped.");
    })
    .catch((err) => {
      console.error("Unable to stop scanning", err);
    });

  closePopup(); // Close the popup after success
}

function error(err) {
  console.error("QR Code scan failed", err);
}
