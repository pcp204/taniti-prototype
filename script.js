const modal = document.getElementById("bookModal");

const openBookButtons = [
  document.getElementById("openBook"),
  document.getElementById("openBook2"),
  document.getElementById("openBook3")
];

const closeBook = document.getElementById("closeBook");

const bookForm = document.getElementById("bookForm");
const successMsg = document.getElementById("successMsg");
const choiceField = document.getElementById("choiceField");

function openModal(prefillChoice = "") {
  successMsg.hidden = true;
  bookForm.hidden = false;
  modal.hidden = false;
  choiceField.value = prefillChoice;
}

function closeModal() {
  modal.hidden = true;
}

openBookButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => openModal());
  }
});

if (closeBook) {
  closeBook.addEventListener("click", closeModal);
}

document.querySelectorAll(".book").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.choice || "");
  });
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookForm.hidden = true;
  successMsg.hidden = false;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
