const emailInput =document.getElementById('email');
const nameInput= document.getElementById('name');
const passwordInput= document.getElementById('password');
Form.addEventListner('submit',function(event){
    event.preventDefault();
    if (nameInput.value==='')
    {
        alert('please enter your name');
        return;
    }
    if (emailInput==='') 
    {alert('enter e-mali');
    return;
        
    }
    const emailRegex = /^[^\s@]+@gmail+\.com$/i;
    if(passwordInput==='')
    {
        alert('enter password');
        return;

    }
    
    alert('form submitted succes');
    form.submit();

});
