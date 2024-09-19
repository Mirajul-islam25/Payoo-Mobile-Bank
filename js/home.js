// console.log('home page login');
// step-1:
document.getElementById('button-add-money').addEventListener('click', function(event){
      event.preventDefault();
      // console.log('money add button clicked');
      const totalAddMoney = document.getElementById('total-add-money').value;
      console.log(totalAddMoney);

      const pinNumber = document.getElementById('pin-number').value;
      console.log(pinNumber);
})