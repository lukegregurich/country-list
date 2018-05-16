console.log('hello friend')

const form = document.querySelector('form#enterCountry')

const renderListItem = function(label, value){ 
  const item = document.createElement('li')
  item.textContent = `${label}: `
  try {
    item.appendChild(value)
  } catch(e) {
    item.textContent += value
  }
  return item
}