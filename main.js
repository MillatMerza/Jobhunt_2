document.getElementById("icon").addEventListener("click", function () {
  document.getElementById("myDiv").classList.toggle("menu");
  document.getElementById("icon-color").classList.toggle("menu--icon");
});

// QR Code scanner instance
// Automatically start the scanner without needing the user to click an extra button.
// Define the variables
let html5QrCode = new Html5Qrcode("reader");

// Event listener for the button click to start QR scanning
document.getElementById("startQRButton").addEventListener("click", function () {
  openPopup();
});

document.getElementById("closeBtn").addEventListener("click", function () {
  closePopup();
});

function openPopup() {
  // Show the popup
  document.getElementById("popup").style.display = "flex";
  
  // Start the QR scanner and request camera access
  html5QrCode.start(
    { facingMode: "environment" }, // Use the environment-facing camera
    {
      fps: 10,  // Frames per second for scanning
      qrbox: { width: 250, height: 250 }  // Define the size of the QR scanning box
    },
    success,  // Success callback when QR code is scanned
    error     // Error callback for handling scan errors
  ).catch(err => {
    console.error("Unable to start the QR code scanning", err);
  });
}

function closePopup() {
  // Hide the popup
  document.getElementById("popup").style.display = "none";

  // Stop the scanner when closing the popup
  html5QrCode.stop().then(() => {
    console.log("QR Code scanning stopped.");
  }).catch(err => {
    console.error("Unable to stop scanning", err);
  });
}

function success(decodedText, decodedResult) {
  // Display the result of the QR scan
  document.getElementById("result").innerHTML = `
      <h2>Success!</h2>
      <p><a href="${decodedText}" target="_blank">${decodedText}</a></p>
      `;
  
  // Stop the QR scanner after successful scan
  html5QrCode.stop().then(() => {
    console.log("QR Code scanning stopped after success.");
  }).catch(err => {
    console.error("Unable to stop scanning", err);
  });

  closePopup(); // Close the popup after scanning is successful
}

function error(err) {
  // Log any scanning errors
  console.error("QR Code scan failed", err);
}
