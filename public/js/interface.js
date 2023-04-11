$('.main__schedule').hide();
$('.main__diary').hide();

$('.main__options-option').click(function(){
    $(this).css('background-color','#EEEEFD');
    $(this).css('color','#6864ED');
    $('.main__options-option').not(this).css('background-color', 'white');
    $('.main__options-option').not(this).css('color', '#272732');
    $(`.main__${$(this).val()}`).show();
    $('.main__block').not(`.main__${$(this).val()}`).hide()
})


function changeSelectValue(val){
    if (val === 'Teacher') {
        $('#signUp__inpClass').hide(100);
    } else {
        $('#signUp__inpClass').show(100);
    }
}