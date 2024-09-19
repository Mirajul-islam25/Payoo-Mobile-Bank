// console.log('auto clicking game');


//step-1:set event handlers
document.getElementById('button-login').addEventListener('click', function(event){
      //step-1:set preventdefault
      event.preventDefault();
      console.log('button click login');

      //step-3:set phn number
      const phoneNumber = document.getElementById('phone-number').value;
      console.log(phoneNumber);

      //step-3:set pin number
      const pinNumber = document.getElementById('pin-number').value;
      console.log(pinNumber);

      //bad way to validate
      if( phoneNumber === '234' && pinNumber === '123456') {
            console.log('you are logged in');
            window.location.href ="home-page.html";
      }
      else{
            console.log('wrong phone number or pin number');
      }


})