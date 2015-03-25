/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){
        var userName = document.querySelector("#f_username");
        var eMail = document.querySelector("#f_email");
        var phoneNumber = document.querySelector("#f_phone");
        var password = document.querySelector("#f_password");
        var socialSecurity = document.querySelector("#f_ssn");
        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
//id = is the form input field ID
        validateField(userName);
        validateField(eMail);
        validateField(phoneNumber);
        validateField(password);
        validateField(socialSecurity);


        e.preventDefault();
        return false;
    };
    


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/;

        } else if (inputName.name === 'f_email') {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        } else if (inputName.name === 'f_phone') {
            var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        } else if (inputName.name === 'f_password') {
            var pattern = /^[a-zA-Z]\w{3,14}$/;
        } else if (inputName.name === 'f_ssn') {
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



