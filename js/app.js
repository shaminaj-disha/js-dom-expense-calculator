// getIncomeValue function declared here
function getIncomeValue() {
    const incomeValue = document.getElementById("income-value").value;
    return incomeValue; //returns value from here
}
// calculateBalance function declared here
function calculateBalance() {
    const incomeValue = getIncomeValue(); //calling function
    const income = parseFloat(incomeValue);
    const totalExpenses = calculateExpenses(); //calling function
    if (totalExpenses >= 0) {
        document.getElementById("alert-message").style.display = "none";
        const balance = income - totalExpenses; //calculating balance
        return balance; //returns value from here
    }
    else {
        document.getElementById("alert-message").style.display = "block";
        return "Balance can't be calculated"; //returns error
    }
}
// calculateExpenses function declared here
function calculateExpenses() {
    const incomeValue = getIncomeValue();
    const income = parseFloat(incomeValue);
    const foodValue = document.getElementById("food-value").value;
    const food = parseFloat(foodValue);
    const rentValue = document.getElementById("rent-value").value;
    const rent = parseFloat(rentValue);
    const clothesValue = document.getElementById("clothes-value").value;
    const clothes = parseFloat(clothesValue);
    if (incomeValue.length != 0 && foodValue.length != 0 && rentValue.length != 0 && clothesValue.length != 0) {
        if (income >= 0) {
            if ((food >= 0 && food <= income) && (rent >= 0 && rent <= income) && (clothes >= 0 && clothes <= income)) {
                const totalExpenses = food + rent + clothes; //adding expenses
                if (income >= totalExpenses) {
                    document.getElementById("alert-message").style.display = "none";
                    return totalExpenses; //returns value from here
                }
                else {
                    document.getElementById("alert-message").style.display = "block";
                    return "Expenses shouldn't be higher than income values"; //returns error
                }
            }
            else {
                document.getElementById("alert-message").style.display = "block";
                return "Please Enter a valid positive number which is less than or equal to income for all input fields"; //returns error
            }
        }
        else {
            document.getElementById("alert-message").style.display = "block";
            return "Please enter a valid positive number in all input fields"; //returns error
        }
    }
    else {
        document.getElementById("alert-message").style.display = "block";
        return "No input fields can be empty, at least put a 0"; //returns error
    }
}
// calculateSavingAmount function declared here
function calculateSavingAmount() {
    const incomeValue = getIncomeValue(); //calling function
    const income = parseFloat(incomeValue);
    const saveValue = document.getElementById("save-value").value;
    const save = parseFloat(saveValue);
    const balance = calculateBalance(); //calling function
    if (incomeValue.length != 0 && saveValue.length != 0) {
        if (income >= 0) {
            if (balance >= 0) {
                if (save >= 0 && save <= 100) {
                    const savingAmount = income * (save / 100); //calculating save amount
                    if (balance >= savingAmount) {
                        document.getElementById("alert-message").style.display = "none";
                        return savingAmount; //returns value from here
                    }
                    else {
                        document.getElementById("alert-message").style.display = "block";
                        return "Saving amount can't be more than balance"; //returns error
                    }
                }
                else {
                    document.getElementById("alert-message").style.display = "block";
                    return "Please enter a valid positive save amount not more than 100"; //returns error
                }
            }
            else {
                document.getElementById("alert-message").style.display = "block";
                return "You can't save without proper expense values or balance and when any input field is empty"; //returns error
            }
        }
        else {
            document.getElementById("alert-message").style.display = "block";
            return "Please enter a valid positive number in all input fields"; //returns error
        }
    }
    else {
        document.getElementById("alert-message").style.display = "block";
        return "No input fields can be empty, at least put a 0"; //returns error
    }
}
//clicking calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
    document.getElementById("total-expenses").innerText = calculateExpenses(); //calling function
    document.getElementById("balance").innerText = calculateBalance(); //calling function
})
//clicking save button
document.getElementById("save-btn").addEventListener("click", function () {
    const previousBalance = calculateBalance(); //calling function
    const savingAmount = calculateSavingAmount(); //calling function
    document.getElementById("saving-amount").innerText = savingAmount; //calling function
    if (previousBalance >= savingAmount) {
        document.getElementById("alert-message").style.display = "none";
        const newBalance = previousBalance - savingAmount; //calculating remaining balance
        document.getElementById("remaining-balance").innerText = newBalance; //setting value in innerText
    }
    else {
        document.getElementById("alert-message").style.display = "block";
        document.getElementById("remaining-balance").innerText = "Remaining balance can't be calculated"; //setting error message in innerText
    }
})