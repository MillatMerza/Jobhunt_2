document.getElementById("icon").addEventListener("click", function () {
  document.getElementById("myDiv").classList.toggle("menu");
  document.getElementById("icon-color").classList.toggle("menu--icon");
});

// QR Code scanner instance
const qrScanner = new Html5QrcodeScanner("qrCodeReader", {
  qrbox: {
    width: 250,
    height: 250,
  },
  fps: 20,
  // rememberLastUsedCamera: true,
});

const popup = document.querySelector(".QrWindow");
const startButton = document.getElementById("startQRButton");
const closeButton = document.getElementById("closePopup");

startButton.onclick = function () {
  popup.style.display = "flex";
  qrScanner.render(scanSuccess, scanError);
};

closeButton.onclick = function () {
  popup.style.display = "none";
  qrScanner.clear();
};

function scanSuccess(result) {
  document.getElementById("scanResult").innerHTML = `
            <p>Scanned: <a href="${result}" target="_blank">${result}</a></p>
            `;
}

function scanError(err) {
  console.error(err);
}
