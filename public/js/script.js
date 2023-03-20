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
    sendData(data, 'SignUp__form', 'POST', 'signUp');
    window.location = "http://localhost:3000/signUp";
})


$('#Login__button').click(function(){
    let data = {
        name:signUp__inpName.value,
        surname:signUp__inpSurname.value,
        password:signUp__inpPassword.value
    };
    sendData(data, 'SignUp__form', 'POST', 'login');
})


