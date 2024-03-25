const basicSalary = parseInt(prompt("Enter total basic salary: ")) ; // collecting user input
const benefits = parseInt(prompt("Enter total benefits: "));
let tax = 0
let taxableincome = 0
let gross = basicSalary + benefits
let netsalary = 0

// Gross = basicSalary + benefits
// Netsalary = Gross - deductions


function nssfcalculator(salary) { //calculates nssfdeductions
    let nssftierone = 0
    let nssftiertwo = 0
    let nssftotal

    if (salary <= 7000) { // gets nssfdeduction for tier one 
        nssftierone = salary * 6/100
    }

    if (salary > 7000 && salary <= 36000) { // gets nssfdeduction for tier two 
        nssftierone = 7000 * 6 / 100
        let salaryBalance = salary - 7000
        nssftiertwo = salaryBalance  * 6/100
    }
    
    nssftotal = nssftierone + nssftiertwo
    return nssftotal
}

function nhifcalculator(salary) { // calculates the nhifdeductions
    let deduction = 0

    if (salary >= 0 && salary <= 5999) {
        deduction = 150
    } else if (salary >= 6000 && salary <= 7999) {
        deduction = 300
    } else if (salary >= 8000 && salary <= 1199) {
        deduction = 400
    } else if (salary >= 12000 && salary <= 14999) {
        deduction = 500
    } else if (salary >= 15000 && salary <= 19999) {
        deduction = 600
    } else if (salary >= 20000 && salary <= 24999) {
        deduction = 750
    } else if (salary >= 25000 && salary <= 29999) {
        deduction = 850
    } else if (salary >= 30000 && salary <= 34999) {
        deduction = 900
    } else if (salary >= 35000 && salary <= 39999) {
        deduction = 950
    } else if (salary >= 40000 && salary <= 44999) {
        deduction = 1000
    } else if (salary >= 45000 && salary <= 49999) {
        deduction = 1100
    } else if (salary >= 50000 && salary <= 59999) {
        deduction = 1200
    } else if (salary >= 60000 && salary <= 69999) {
        deduction = 1300
    } else if (salary >= 70000 && salary <= 79999) {
        deduction = 1400
    } else if (salary >= 80000 && salary <= 89999) {
        deduction = 1500
    } else if (salary >= 90000 && salary <= 99999) {
        deduction = 1600
    } else if (salary >= 100000) {
        deduction = 1700
    }

    return deduction
}



nssfdeduction = nssfcalculator(gross) //calling out nssfdeduction
nhifdeduction = nhifcalculator(gross) //calling out nhifdeductions
taxableincome = gross - nssfdeduction  // gets the money needed to be taxed 

if (gross >= 0 && gross <= 24000) { // calculates the taxs for each salary inputed and gets the net salary
    tax = (taxableincome  * 10 / 100) 
    net = gross - tax - nssfdeduction - nhifdeduction
} else if (gross >= 24001 && gross <= 32333) {
    tax = (taxableincome  * 25 / 100) 
    net = gross - tax - nssfdeduction - nhifdeduction
} else if (gross >= 32334 && gross <= 500000) {
    tax = (taxableincome  * 30 / 100) 
    net = gross - tax - nssfdeduction - nhifdeduction
} else if (gross >= 500001 && gross <= 800000) {
    tax = (taxableincome  * 32.5 / 100) 
    net = gross - tax - nssfdeduction - nhifdeduction  
} else if (gross >= 800000) {
    tax = (taxableincome  * 35 / 100) 
    net = gross - tax - nssfdeduction - nhifdeduction
} 

alert('Your gross is: ' + gross + '\n' + 'Your tax is: ' + tax + '\n' + 'your nssfdeduction:' + nssfdeduction +'\n' + 'your nhifdeduction is:' + nhifdeduction + '\n' + 'your net is:' + net)

// displays gross, tax ,nssfdeduction, nhifdeduction and net
    