document.getElementById('Form').addEventListener('submit', e => {
    ValidateForms();
    if(ValidateForms()){
        alert("Form Submitted Successfully!");
    }else{
        e.preventDefault();
    }
});

const PrintNotice= (FormInput,Message,Notice) => {
    const InputNotice = FormInput.parentElement;
    const DisplayNotice = InputNotice.querySelector('.Notice');
    if(Notice==0){
        DisplayNotice.innerText = Message;
    }else{
        DisplayNotice.innerText = '';
    }
}

const ValidateForms = () => {
    const UsernameInput = document.getElementById('Username').value;
    const EmailInput = document.getElementById('Email').value;
    const GenderInput=document.getElementById('Gender').value;
    const MessageInput=document.getElementById('Message').value;
    const TermsCheck=document.getElementById("Terms").checked;

    console.log(GenderInput);
    let Validate=0;
    if(UsernameInput==='') {
        PrintNotice(Username,'Name is required!',0);
        Validate++;
    }else{
        PrintNotice(Username,'',1);
    }

    if(EmailInput==='') {
        PrintNotice(Email, 'Email is required!',0);
        Validate++
    }else if(!EmailInput.endsWith("gmail.com")) {
        PrintNotice(Email, 'Provide a valid email address!',0);
        Validate++;
    }else{
        PrintNotice(Email,'',1);
    }

    if(GenderInput==="None"){
        PrintNotice(Gender,'Gender is required!',0);
        Validate++;
    }else{
        PrintNotice(Gender,'',1);
    }

    if(MessageInput===''){
        PrintNotice(Message,'Message must not be empty!',0);
        Validate++;
    }else{
        PrintNotice(Message,'',1);
    }
    
    if(!TermsCheck){
        PrintNotice(Terms,'You must subscribe!',0);
        Validate++;
    }else{
        PrintNotice(Terms,'',1);
    }


    if(Validate===0){
        return true;
    }else{
        return false;
    }

};
