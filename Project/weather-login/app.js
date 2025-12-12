const toggleButtons = document.querySelectorAll('button[data-target]');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.querySelector(btn.dataset.target);
    
    const isHidden = input.type === 'password';
    
    if (!input) return;
    
    if (isHidden) {
      input.type='text';
      btn.textContent='HIDE';
    } else {
      input.type='password';
      btn.textContent='SHOW';
    }
  });
});

console.dir(toggleButtons[0])
console.log(toggleButtons[0])
console.log(toggleButtons[0].dataset.target)
console.log(document.querySelector('input#password'))