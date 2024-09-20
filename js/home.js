// console.log('home page login');
// step-1:
document.getElementById('button-add-money').addEventListener('click', function(event){
      event.preventDefault();
      // console.log('money add button clicked');
      //step-2:
      const totalAddMoney = document.getElementById('total-add-money').value;
      console.log(totalAddMoney);

      const pinNumber = document.getElementById('pin-number').value;
      console.log(pinNumber);

      //step-3:
      //wrong way to validate pin number
      if ( pinNumber === '123456'){
            console.log('add to your amount');
            //step-4:
            const totalBalance = document.getElementById('total-balance').innerText;
            console.log(totalBalance);

            //step-5:
            const addMoneyNumber = parseFloat(totalAddMoney);
            const totalBalanceNumber = parseFloat(totalBalance);
            const newBalance = addMoneyNumber + totalBalanceNumber;
            console.log(newBalance)
            //step-6:
            document.getElementById('total-balance').innerText = newBalance;
      }
      else{
            console.log('failed to add your amount, please try again!');
      }
})