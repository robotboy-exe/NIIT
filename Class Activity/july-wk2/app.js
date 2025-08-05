let inputDetails = document.querySelector('#inputDetails')
let serial = document.querySelector('#id')
let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
const table = document.querySelector('#table')
const tbody = document.querySelector ('#tbody')



inputDetails.addEventListener('submit', (event) => {
  event.preventDefault()
  let newData = [serial.value, firstName.value, lastName.value, email.value]
  let newRow = document.createElement('tr')

  newData.forEach(input => {
        const td = document.createElement('td')
    td.textContent = input
  newRow.append(td)
})
tbody.append(newRow)
})