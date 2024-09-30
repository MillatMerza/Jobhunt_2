document.getElementById("icon").addEventListener("click", function () {
  document.getElementById("myDiv").classList.toggle("menu");
  document.getElementById("icon-color").classList.toggle("menu--icon");
});

// QR Code scanner instance
// const qrScanner = new Html5QrcodeScanner("qrCodeReader", {
//   qrbox: {
//     width: 250,
//     height: 250,
//   },
//   fps: 20,
//   // rememberLastUsedCamera: true,
// });

// const popup = document.querySelector(".QrWindow");
// const startButton = document.getElementById("startQRButton");
// const closeButton = document.getElementById("closePopup");

// startButton.onclick = function () {
//   popup.style.display = "flex";
//   qrScanner.render(scanSuccess, scanError);
// };

// closeButton.onclick = function () {
//   popup.style.display = "none";
//   qrScanner.clear();
// };

// function scanSuccess(result) {
//   document.getElementById("scanResult").innerHTML = `
//             <p>Scanned: <a href="${result}" target="_blank">${result}</a></p>
//             `;
// }

// function scanError(err) {
//   console.error(err);
// }
  const scanner = new Html5QrcodeScanner("reader", {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 20,
    rememberLastUsedCamera: true,
  });

  document
    .getElementById("startQRButton")
    .addEventListener("click", function () {
      openPopup();
    });

  document.getElementById("closeBtn").addEventListener("click", function () {
    closePopup();
  });

  function openPopup() {
    document.getElementById("popup").style.display = "flex";
    // Start the scanner and request camera access
    scanner.render(success, error);
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    scanner.clear(); // Stop the scanner when the popup closes
  }

  function success(result) {
    document.getElementById("result").innerHTML = `
            <h2>Success!</h2>
            <p><a href="${result}" target="_blank">${result}</a></p>
            `;
    scanner.clear();
    closePopup(); // Close popup after successful scan
  }

  function error(err) {
    console.error(err);
  }