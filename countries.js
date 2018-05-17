console.log('hello friend')
const count = 0;
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
    const list = document.createElement('ol')
    Object.keys(data).map(function(label){
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

const counter = function(){
  return count += 1
}


const handleSubmit = function(ev){
    ev.preventDefault() 
    const form = ev.target
    const country = {
        Country: form.countryName.value,
        Capital: form.capital.value,
    }
    const list = renderList(country)
    const countries = document.querySelector('#countries')
    countries.appendChild(list)
    form.reset();
    form.countryName.focus()
  }

  const form = document.querySelector('form#enterCountry')
  form.addEventListener('submit', handleSubmit)
