const toggleButtons = document.querySelectorAll("button[data-target]");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.querySelector(btn.dataset.target);

    const isHidden = input.type === "password";

    if (!input) return;

    if (isHidden) {
      input.type = "text";
      btn.textContent = "HIDE";
    } else {
      input.type = "password";
      btn.textContent = "SHOW";
    }
  });
});

// console.dir(toggleButtons[0]);
// console.log(toggleButtons[0]);
// console.log(toggleButtons[0].dataset.target);
// console.log(document.querySelector("input#password"));

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const MAX_SIZE_MB = 3;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const fileInput = document.querySelector("#avatar");
const uploadButton = document.querySelector(".btn-upload");
const previewBox = document.querySelector("#previewBox");
const previewImg = document.querySelector("#preview");
const placeholder = document.querySelector(".upload-placeholder");
const fileNameSpan = document.querySelector(".file-name");
const fileSizeSpan = document.querySelector(".file-size");
const messageDiv = document.querySelector("#uploadMessage");

let currentObjectURL = null;

function showMessage(text, isError) {
  if (isError === undefined) {
    isError === false;
  }

  messageDiv.textContent = text;

  if (isError) {
    messageDiv.className = `message error`;
  } else {
    messageDiv.className = `message success`;
  }

  if (!isError) {
    setTimeout(function () {
      messageDiv.style.display = "none";
    }, 3000);
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + " B";
  }
  if (bytes < 1048576) {
    return (bytes / 1024).toFixed(1) + " KB";
  }
  return (bytes / 1048576).toFixed(1) + " MB";
}

function resetFilePreview() {
  if (currentObjectURL) {
    URL.revokeObjectURL (currentObjectURL);
    currentObjectURL = null;
  }

  previewImg.src= '';
  previewImg.style.display = 'none';
  placeholder.style.display = 'block';
  previewBox.classList.remove('has-image')

}
