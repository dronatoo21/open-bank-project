document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmmountString = depositeField.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);

    depositeField.value = '';

    if(isNaN(newDepositeAmmount)){
        alert('please enter a valid ammount');
        return;
    }
    
    const totalDepositeElm = document.getElementById('total-deposite');
    const previousTotalDepositeString = totalDepositeElm.innerText;
    const previousTotalDeposite = parseFloat(previousTotalDepositeString);

    const totalBalanceElm = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElm.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance + newDepositeAmmount;
    totalBalanceElm.innerText = currentTotalBalance;

    const currentTotalDeposite = previousTotalDeposite + newDepositeAmmount;
    totalDepositeElm.innerText = currentTotalDeposite;
});