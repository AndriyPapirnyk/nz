
function sendData(formData, formId, method, methodName, location) {
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
        window.location.href = location;
    })
    .catch(error => console.log(error))
}


function sendAndValidateData(formData, formId, method, methodName, location) {
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
            window.location.href = location;
            alert('ok')
        } else {
            alert('Data not found');
        }
    })
    .catch(error => console.log(error))
}


$('#SignUp__sumbitBtn').click(function validateSignUpForm(){
    let data = ''
    if(signUpSelect.value == 'Student'){
        data = {
            name:signUp__inpName.value,
            surname:signUp__inpSurname.value,
            class:signUp__inpClass.value,
            age:signUp__inpAge.value,
            status:signUpSelect.value,
            password:signUp__inpPassword.value
        };
        if(signUp__inpName.value.trim() != '' && signUp__inpSurname.value.trim() != '' && signUp__inpClass.value.trim() != '' && signUp__inpAge.value.trim() != '' && signUp__inpPassword.value.trim() != ''){
            sendAndValidateData(data, 'SignUp__form', 'POST', 'signUp', 'login');
        }else{
            alert('Please fill in all field');
        }
    }else{
        data = {
            name:signUp__inpName.value,
            surname:signUp__inpSurname.value,
            status:signUpSelect.value,
            age:signUp__inpAge.value,
            password:signUp__inpPassword.value
        };
        if(signUp__inpName.value.trim() != '' && signUp__inpSurname.value.trim() != '' && signUp__inpAge.value.trim() != '' && signUp__inpPassword.value.trim() != ''){
            sendAndValidateData(data, 'SignUp__form', 'POST', 'signUp', 'login');
        }else{
            alert('Please fill in all field');
        }
    }
    return false;
})


$('#Login__button').click(function validateForm(){
    let data = {
        name:login__name.value,
        surname:login__surname.value,
        password:login__password.value,
        status:loginSelect.value
    };
    if(login__name.value.trim() != '' && login__surname.value.trim() != '' && login__password.value.trim() != ''){
        console.log(data.status)
        if(data.status == 'Teacher'){
            sendAndValidateData(data, 'login__form', 'POST', 'login', 'teacher');
        }else if(data.status == 'Student'){
            sendAndValidateData(data, 'login__form', 'POST', 'login', 'main');
        }
        return false;
    }else{
        alert('Please fill in all fields');
        return false;
    }
})

try{
    fetch('js/student.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    markDb = data
    function takeMarks(){
        console.log(markDb)
        for(let el in markDb[0].subjects){
            $('.main__progress').append(`
            <div class="main__progress-item" id="${el}">
            <div>${el}</div>
            <div>${markDb[0].subjects[el]}</div>
            </div>
            `)
        }
        $('.main__name').text(`${markDb[0].name} ${markDb[0].surname}`)
    }
    takeMarks()
    });
}catch(e){
    console.log(e)
}

