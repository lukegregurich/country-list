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

const renderList = function(data){
    const list = document.createElement('ul')
    Object.keys(data).map(function(label){
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault() 
    const form = ev.target
    const country = {
        countryName: form.countryName.value,
        capital: form.capital.value,
    }
    const list = renderList(country)
    const countries = document.querySelector('#countries')
    countries.appendChild(list)
   
    form.reset();
    form.countryName.focus()
  }

  form.addEventListener('submit', handleSubmit)