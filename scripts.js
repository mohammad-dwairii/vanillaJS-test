var btn = document.getElementById("clickBtn");

var modal = document.getElementById("confirmationModal");
var modalTitle = document.getElementById("confirmationTitle");

btn.onclick = function () {
  modalTitle.innerText = btn.getAttribute("message");
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resultDiv.innerHTML = "";
  }
}

var resultDiv = document.getElementById("resultDiv");

function onButtonClick(targetButton) {
  resultDiv.innerHTML = targetButton.getAttribute('message');
  modal.style.display = "none";
}