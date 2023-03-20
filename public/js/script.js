function sendData(formData, formId, method, methodName) {
    const form = document.getElementById(`${formId}`);
    fetch(`${methodName}`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(_=>{
        form.reset();
    })
    .catch(error => console.log(error))
}


$('#SignUp__sumbitBtn').click(function(){
    let data = {
        name:signUp__inpName.value,
        surname:signUp__inpSurname.value,
        class:signUp__inpClass.value,
        age:signUp__inpAge.value,
        password:signUp__inpPassword.value
    };
    if(signUp__inpName.value.trim() != '' && signUp__inpSurname.value.trim() != '' && signUp__inpClass.value.trim() != '' && signUp__inpAge.value.trim() != '' && signUp__inpPassword.value.trim() != ''){
    sendPurchaseData(data);
    alert('Ok')
    }else{
        alert('Please fill in all fields');
    }
})




function sendPurchaseData(formData) {
    const form = document.getElementById('SignUp__form');
    fetch('signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(_=>{
        form.reset();
    })
    .catch(error => console.log(error))
}



$('#Login__button').click(function(){
    let data = {
        name:signUp__inpName.value,
        surname:signUp__inpSurname.value,
        password:signUp__inpPassword.value
    };
    sendPurchaseData(data);
})


function sendPurchaseData(formData) {
    const form = document.getElementById('SignUp__form');
    fetch('signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(_=>{
        form.reset();
    })
    .catch(error => console.log(error))
}