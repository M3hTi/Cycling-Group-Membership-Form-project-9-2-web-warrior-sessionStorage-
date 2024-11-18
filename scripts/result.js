const table = document.querySelector('.js-table')

function showInfo(){
    const informations = JSON.parse(sessionStorage.getItem('formData'))
    // console.log(informations);
    for (const info in informations) {
        const newRow = document.createElement('tr')
        const label = document.createElement('td')
        label.textContent = `${info}: `
        const value = document.createElement('td')
        value.textContent = informations[info]
        newRow.appendChild(label)
        newRow.appendChild(value)
        table.appendChild(newRow)
    }
}















window.addEventListener('load', showInfo)
    