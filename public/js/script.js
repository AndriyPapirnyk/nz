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

function sendAndValidateData(formData, formId, method, methodName) {
    const form = document.getElementById(`${formId}`);
    fetch(`${methodName}`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('User found');
            response.json().then(data => {
                console.log('User data received from server:', data);
            });
        } else {
            alert('Data not found');
        }
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
        sendData(data, 'SignUp__form', 'POST', 'signUp');
    }else{
        alert('Please fill in all fields');
    }
})


$('#Login__button').click(function(){
    let data = {
        name:login__name.value,
        surname:login__surname.value,
        password:login__password.value
    };
    if(login__name.value.trim() != '' && login__surname.value.trim() != '' && login__password.value.trim() != ''){
        sendAndValidateData(data, 'login__form', 'POST', 'login');
    }else{
        alert('Please fill in all fields');
    }
})



fetch('/login')
    .then(response => response.text())
    .then(studentValidate => {
        console.log(studentValidate)
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred');
});


