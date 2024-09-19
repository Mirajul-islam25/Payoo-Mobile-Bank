// console.log('auto clicking game');


//step-1:set event handlers
document.getElementById('button-login').addEventListener('click', function(event){
      //step-1:set preventdefault
      event.preventDefault();
      console.log('button click login');
      
      //step-3:set phn number
      const phoneNumber = document.getElementById('phone-number').value;
      console.log(phoneNumber);

})