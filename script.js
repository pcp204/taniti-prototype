const dialog = document.getElementById("bookModal");

const openBook = document.getElementById("openBook");
const openBook2 = document.getElementById("openBook2");
const openBook3 = document.getElementById("openBook3");

const cancelBtn = document.getElementById("cancelBtn");
const choiceField = document.getElementById("choiceField");

const bookForm = document.getElementById("bookForm");
const successMsg = document.getElementById("successMsg");

function openDialog(prefillChoice = "") {
  successMsg.hidden = true;
  bookForm.hidden = false;
  choiceField.value = prefillChoice;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert("This browser does not support dialog. Please use Chrome or Edge.");
  }
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

openBook.addEventListener("click", () => openDialog());
openBook2.addEventListener("click", () => openDialog());
openBook3.addEventListener("click", () => openDialog("Lodging request"));

cancelBtn.addEventListener("click", closeDialog);

document.querySelectorAll(".book").forEach(btn => {
  btn.addEventListener("click", () => openDialog(btn.dataset.choice || ""));
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookForm.hidden = true;
  successMsg.hidden = false;
});
