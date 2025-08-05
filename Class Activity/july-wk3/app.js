const user = document.querySelector('#userDetails')
const cart = document.querySelector('.add-to-cart')
const phoneNumber = '2348109307552'
const userName = document.querySelector('#userName')
const contact = document.querySelector('#contact')
const update = document.querySelector('#update')
let savedName = localStorage.getItem('savedN')
let savedPhone = localStorage.getItem('savedP')

function updateUI () {
  userName.textContent = savedName
  contact.textContent = savedPhone
  user.style.display = 'none';
}

const checkIfUser = () =>  {
  if (savedName && savedPhone) {
    updateUI()
  } else {
    user.style.display = 'flex';
  }
}
checkIfUser()

update.addEventListener('click', (evt) => {
  user.style.display = 'flex';
} )

user.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const inputName = document.querySelector('#fullName').value.trim()
  const inputPhone = document.querySelector('#phone').value.trim()
  
  if (fullName && phone) {
    localStorage.setItem('savedN', inputName)
    localStorage.setItem('savedP', inputPhone)
    
    savedName = inputName
    savedPhone = inputPhone
    
    updateUI()
  } else {
    alert('Please input your full Details')
  }
  
  console.log(localStorage.getItem('savedN'), localStorage.getItem('savedP'))
})

cart.addEventListener('click',(evt) => {
  const message = 
  `
  Name = ${savedName}
  Phone Number = ${savedPhone}
  `
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank')
})