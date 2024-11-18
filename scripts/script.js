const nxtBtn = document.querySelector('.next-button');
const membershipForm = document.querySelector('#membershipForm');
const errorMsg = document.querySelector('.errorMsg');

membershipForm.noValidate = true;


function SelectInputs(id,name){
    this.id = id;
    this.name = name;
}

const ridersFormArr = [
    new SelectInputs('ageGroup','ageGroup'),
    new SelectInputs('bike','bike'),
    new SelectInputs('route','route'),
    new SelectInputs('accommodation','accommodation'),
    new SelectInputs('region','region'),
    new SelectInputs('milesPerDay','milesPerDay')
]


function getFormData(){
    const formData = {}
    for (const selectInput of ridersFormArr) {
        const input = document.querySelector(`#${selectInput.id}`)
        formData[selectInput.name] = input.value
    }
    return formData
}

function validateForm(){
    const formData = getFormData()
    // console.log(formData);
    let isValid = true
    try {
        // Clear any previous error messages
        errorMsg.innerHTML = '';
        
        for (const data in formData) {
            if(formData[data] === ''){
             throw (`Please fill out the ${data} field`)
             isValid = false
            }
        }
        return isValid
        
    } catch (error) {
        showError(error)
    }
}

function showError(Msg){
    // Clear previous errors
    errorMsg.innerHTML = '';
    const error = document.createElement('p')
    error.textContent = Msg
    errorMsg.appendChild(error)
}


function verifyForm(e) {
    e.preventDefault();
    // Clear previous errors at the start
    errorMsg.innerHTML = '';
    
    const formData = getFormData();
    console.log(formData);
    let isValid = validateForm();
    const riderName = document.querySelector('#riderName').value.trim();
    const txtArea = document.querySelector('#comments').value.trim();
    
    if(!riderName){
        showError('Please fill out the rider name field')
        isValid = false
        return;
    }else{
        formData['Rider Name'] = riderName
    }
    if(!txtArea){
        showError('Please fill out the comments field')
        isValid = false
        return;
    }else{
        formData['Comments'] = txtArea
    }
    if(isValid){
        sessionStorage.setItem('formData', JSON.stringify(formData));
        membershipForm.submit();
    }
}

nxtBtn.addEventListener('click', verifyForm);