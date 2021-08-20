function getUpdateCaseNumber(product, price, isIncreaing){
    const productInput = document.getElementById(product +'-input');
    let productInputValue = productInput.value;
    if(isIncreaing == true){
        productInputValue = parseInt(productInputValue) + 1;
    }
    else if(isIncreaing == false && productInputValue > 0){
        productInputValue = parseInt(productInputValue) - 1;
    }
    productInput.value = productInputValue;
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productInputValue * price;

    calculateTotal();
}

function getInputValue(product){
    const phoneInput = document.getElementById(product+'-input');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    const subTotalInput = document.getElementById('sub-total');
    const subTotalAmount = parseInt(subTotalInput.innerText);
    subTotalInput.innerText = subTotal;

    const taxInput = document.getElementById('tax-amount');
    const taxAmount = parseInt(taxInput.innerText);
    taxInput.innerText = tax;

    const totalInput = document.getElementById('total-price');
    const totalPriceAmount = parseInt(totalInput.innerText);
    totalInput.innerText = totalPrice;
}

//update phone increase decrease event.
document.getElementById('phone-plus').addEventListener('click', function(){
    getUpdateCaseNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    getUpdateCaseNumber('phone', 1219, false);
});

// update case increase decrease event.
document.getElementById('case-plus').addEventListener('click', function(){
   /*  const caseInput = document.getElementById('case-input');
    const caseInputValue = caseInput.value;
    caseInput.value = parseInt(caseInputValue) + 1; */
    getUpdateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-input');
    const caseInputValue = caseInput.value;
    caseInput.value = parseInt(caseInputValue) - 1; */
    getUpdateCaseNumber('case', 59, false);
});