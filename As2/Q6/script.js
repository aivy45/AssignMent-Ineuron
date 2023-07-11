var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];
// Open the modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  document.body.style.backgroundColor = "gray";
  console.log("OPEN");
});

// Close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.backgroundColor = "white";
}

closeBtn.addEventListener("click", closeModal);
