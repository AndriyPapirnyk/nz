
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
            // for(let marks in markDb[0].subjects)
            $('.main__marks').append(`
            <div class="main__marks__item" id="${el}">
            <div>${el}</div>
            <div>${markDb[0].subjects[el]}</div>
            </div>
            `)
        }
    }
    takeMarks()
    });
}catch(e){
    console.log(e)
}

