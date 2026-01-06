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

//FILE UPLOAD ELEMENTS
const fileInput = document.querySelector("#avatar");
const uploadButton = document.querySelector(".btn-upload");
const previewBox = document.querySelector("#previewBox");
const previewImg = document.querySelector("#preview");
const placeholder = document.querySelector(".upload-placeholder");
const fileNameSpan = document.querySelector(".file-name");
const fileSizeSpan = document.querySelector(".file-size");
const messageDiv = document.querySelector("#uploadMessage");

//FILE CONFIGURATION
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const MAX_SIZE_MB = 3;
const maxSizeBytes = MAX_SIZE_MB * 1024 * 1024;


// Track the current Object URL for cleanup
let currentObjectURL = null;


  // CREATE IMAGE PREVIEW
  function createPreview(file) {
    
  //1. Clean up previous Object URL first 
  if (currentObjectURL) {
    URL.revokeObjectURL(currentObjectURL)
  }

  //2. Create Image URL
  const currentObjectURL = URL.createObjectURL(file);
  
  //3. Set image Source to display preview
  previewImg.src = currentObjectURL;
  previewImg.style.display = 'block';
  placeholder.style.display = 'none';
  
  //4. Show file info
  fileNameSpan.textContent = file.name;
  fileSizeSpan.textContent = formatFileSize(file.size);
  
  //5. Show Success Message
  showMessage('Image selected successfully!', false)
}


//====== EVENT LISTENERS=======

//CHOOSE FILE BUTTON CLICK
uploadButton.addEventListener('click', function () {
fileInput.click(); 
});

//FILE SELECTION
fileInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  
  // Reset any previous messages
  messageDiv.textContent = '';
  messageDiv.className = 'message';
  message.style.display = 'none';
  
  //CASE A: No File Selected
  if(!file) {
    resetPreview();
    return;
  }
  
  //CASE B: Check if File type is invalid
  if (!ALLOWED_TYPES.includes(file.type)) {
    showMessage('Only JPG, PNG, WEBP, or GIF images are allowed.', true)
    resetPreview();
    return;
  }
  
  //CASE C: Check if File size is invalid
  if (file.size > maxSizeBytes) {
    showMessage(`File too large. Maximum size is ${MAX_SIZE_MB}MB.`, true)
    resetPreview();
    return;
  }
  
  //CASE D: File is Valid
  createPreview(file);
});


//===== HELPER FUNCTIONS =====

//SHOW MESSAGE 

function showMessage(text, isError = false) {
  //1. Set the text
  messageDiv.textContent = text;

//2. Set class based on isError(true = error, false = success)
  if (isError) {
    messageDiv.className = `message error`;
  } else {
    messageDiv.className = `message success`;
  }

//3. Auto hide success messages after 3secs
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

function resetPreview() {
  
  // Reject File 
  fileInput.value = '';
  
  if (currentObjectURL) {
    URL.revokeObjectURL (currentObjectURL);
    currentObjectURL = null;
  }
  previewImg.src= '';
  previewImg.style.display = 'none';
  placeholder.style.display = 'block';
  previewBox.classList.remove('has-image')
}
