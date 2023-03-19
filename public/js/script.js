$('#SignUp__sumbitBtn').click(function(){
    let data = {
        name:signUp__inpName.value,
        surname:signUp__inpSurname.value,
        class:signUp__inpClass.value,
        age:signUp__inpAge.value,
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