document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdarwField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdarwField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    withdarwField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please enter a valid ammount');
        return;
    }

    const withdrawElm = document.getElementById('total-withdraw');
    const previousWithdrawAmount = withdrawElm.innerText;
    const previousTotalWithdraw = parseFloat(previousWithdrawAmount);

    const totalBalanceElm = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElm.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    if(newWithdrawAmount > previousTotalBalance){
        alert('Insuficient Balance');
        return;
    }

    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElm.innerText = currentTotalBalance;
    
    const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
    withdrawElm.innerText = currentTotalWithdraw;
});