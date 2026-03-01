const modal = document.getElementById("bookModal");
const openBookButtons = ["openBook", "openBook2", "openBook3"].map(id => document.getElementById(id));
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

openBookButtons.forEach(btn => btn.addEventListener("click", () => openModal()));
closeBook.addEventListener("click", closeModal);

document.querySelectorAll(".book").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.choice || ""));
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookForm.hidden = true;
  successMsg.hidden = false;
});

// Filters
const grid = document.getElementById("activityGrid");
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    [...grid.children].forEach(tile => {
      tile.style.display = (filter === "all" || tile.dataset.type === filter) ? "" : "none";
    });
  });
});

// Details panel
const detailsBox = document.getElementById("detailsBox");
const detailsTitle = document.getElementById("detailsTitle");
const detailsText = document.getElementById("detailsText");
const closeDetails = document.getElementById("closeDetails");

const detailMap = {
  beach1: { title: "Yellow Leaf Bay Beaches", text: "Beaches near Taniti City with easy access to sightseeing." },
  rain1: { title: "Rainforest Zip-lining", text: "Guided activity in the rainforest area." },
  vol1: { title: "Volcano Day Tour", text: "Day tour toward the mountainous interior/volcano area." },
  city1: { title: "Merriton Landing Night Out", text: "Entertainment area with pubs/microbrewery and a dance club area." }
};

document.querySelectorAll(".details").forEach(btn => {
  btn.addEventListener("click", () => {
    const d = detailMap[btn.dataset.details];
    detailsTitle.textContent = d.title;
    detailsText.textContent = d.text;
    detailsBox.hidden = false;
    detailsBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

closeDetails.addEventListener("click", () => detailsBox.hidden = true);

// Close modal if user clicks outside card
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
