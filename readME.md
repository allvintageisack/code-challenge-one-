# Grade generator

1. you need to create a html file where you will need to link the javascript to the HTML file
2. Afterwards in your .js file you need to prompt the user to input his/her grade so that they can get their grades

   1. ''' const marks = prompt("Enter student marks: ") ''' it collects the users input

3. Now you need to generate an if-else statements that assign the user grades
   grades are assigned according to the question given

   ![gradegenerator](https://github.com/allvintageisack/code-challenge-one-/assets/155476834/569ff254-fc01-4602-bfe4-514cbe2dcab1)


   ## Assigning Grades

```javascript
if (marks >= 0 && marks <= 100) {
  //checking that an input is between 0 and 100
  if (marks > 79) {
    //checking if marks are greater than 79
    alert("A");
  } else if (marks >= 60 && marks <= 79) {
    //checking if marks are between 60 and 79
    alert("B");
  } else if (marks <= 59 && marks >= 49) {
    alert("C");
  } else if (marks >= 40 && marks <= 49) {
    alert("D");
  } else {
    alert("E");
  }
}
// compelling the user to input a valid value
else {
  alert("Enter a valid value");
}
```

# speedDetector

The beginning of this challenge is not different from the grade generator
you can look at the grade generator to get how you will start

Afterwards, we check the if statements which check the speed of a car

we need the question

s![speedDetector](https://github.com/allvintageisack/code-challenge-one-/assets/155476834/3e76582e-e74e-4497-bb40-4e0fba1fdcfa)


## The speed detector

```javascript
if (speed < 70) {
  //looking if the speed is less than 70
  alert("ok");
} else if (speed >= 70 && speed <= 75) {
  alert("demerit-points 1");
} else if (speed >= 75 && speed <= 80) {
  alert("demerit-points 2");
} else if (speed >= 80 && speed <= 85) {
  alert("demerit-points 3");
} else if (speed >= 85 && speed <= 90) {
  alert("demerit-points 4");
} else if (speed >= 90 && speed <= 100) {
  alert("demerit-points 5");
} else if (speed >= 100 && speed <= 105) {
  alert("demerit-points 6");
} else if (speed >= 105 && speed <= 110) {
  alert("demerit-points 7");
} else if (speed >= 110 && speed <= 115) {
  alert("demerit-points 8");
} else if (speed >= 115 && speed <= 120) {
  alert("demerit-points 9");
} else if (speed >= 120 && speed <= 125) {
  alert("demerit-points 10");
} else if (speed >= 125 && speed <= 130) {
  alert("demerit-points 11");
} else if (speed >= 130 && speed <= 135) {
  alert("demerit-points 12");
} else {
  //When points excede 12 license is suspended
  alert("license suspended");
}
```

The above code checks the speed of the car and each time one limit is exceeded the driver gets a Demerit point, when the points surpass 12 the driver's license is suspended

# Netsalary calculator

This challenge is more complex, you need to do a lot of research for you to accomplish this.
For you to calculate the net salary in Kenya you need to understand how people are being taxed
let's see the question to understand this!

![Netsalary](https://github.com/allvintageisack/code-challenge-one-/assets/155476834/961cb0ad-63fa-473c-b948-1b6de4aa7f66)



Right now that you get the question let's look at the tax rates in Kenya.

[Tax rates in Kenya](https://www.aren.co.ke/payroll/taxrates.htm#NHIF)

so basically I researched the difference between

1. Gross salary
2. Net salary
3. Basic salary
4. Benefits

After knowing the difference I was able to calculate the net salary easily

Gross salary = basic salary + benefits
net salary = Gross - deductions

remember we also need to calculate the NHIFDeductions and NSSf deductions

so before we get the tax we need to get the taxable income.

Taxable income = gross - nssfdeduction

That is where we begin

```javascript
function nssfcalculator(salary) {
  //calculates nssfdeductions
  let nssftierone = 0;
  let nssftiertwo = 0;
  let nssftotal;

  if (salary <= 7000) {
    // gets nssfdeduction for tier one
    nssftierone = (salary * 6) / 100;
  }

  if (salary > 7000 && salary <= 36000) {
    // gets nssfdeduction for tier two
    nssftierone = (7000 * 6) / 100;
    let salaryBalance = salary - 7000;
    nssftiertwo = (salaryBalance * 6) / 100;
  }

  nssftotal = nssftierone + nssftiertwo;
  return nssftotal;
}
```

so if you looked at the tax rates in the NSSF sector you will see that we have two tiers

1. tier one
2. tier two

let's take one salary of ksh 50,000
This person will be charged in tier one and tier two. Why you ask?
so his salary has surpassed Ksh 7000 so 6% of the salary is deducted
In tier two his salary still surpasses the condition so he is also deducted at the end the nssfdeduction is tier one + tier two

in simple terms, the code above calculates the nssfdeduction only!

After calculating the nssfdeduction we calculate the NHIFdeductions

```javascript
function nhifcalculator(salary) {
  // calculates the nhifdeductions
  let deduction = 0;

  if (salary >= 0 && salary <= 5999) {
    deduction = 150;
  } else if (salary >= 6000 && salary <= 7999) {
    deduction = 300;
  } else if (salary >= 8000 && salary <= 1199) {
    deduction = 400;
  } else if (salary >= 12000 && salary <= 14999) {
    deduction = 500;
  } else if (salary >= 15000 && salary <= 19999) {
    deduction = 600;
  } else if (salary >= 20000 && salary <= 24999) {
    deduction = 750;
  } else if (salary >= 25000 && salary <= 29999) {
    deduction = 850;
  } else if (salary >= 30000 && salary <= 34999) {
    deduction = 900;
  } else if (salary >= 35000 && salary <= 39999) {
    deduction = 950;
  } else if (salary >= 40000 && salary <= 44999) {
    deduction = 1000;
  } else if (salary >= 45000 && salary <= 49999) {
    deduction = 1100;
  } else if (salary >= 50000 && salary <= 59999) {
    deduction = 1200;
  } else if (salary >= 60000 && salary <= 69999) {
    deduction = 1300;
  } else if (salary >= 70000 && salary <= 79999) {
    deduction = 1400;
  } else if (salary >= 80000 && salary <= 89999) {
    deduction = 1500;
  } else if (salary >= 90000 && salary <= 99999) {
    deduction = 1600;
  } else if (salary >= 100000) {
    deduction = 1700;
  }

  return deduction;
}
```

This is easy to understand because when the user inputs his salary the deduction is done according to the salary he has no more.

After that we calculate the tax and the netsalary:

```javascript
nssfdeduction = nssfcalculator(gross); //calling out nssfdeduction
nhifdeduction = nhifcalculator(gross); //calling out nhifdeductions
taxableincome = gross - nssfdeduction; // gets the money needed to be taxed

if (gross >= 0 && gross <= 24000) {
  // calculates the taxs for each salary inputed and gets the net salary
  tax = (taxableincome * 10) / 100;
  net = gross - tax - nssfdeduction - nhifdeduction;
} else if (gross >= 24001 && gross <= 32333) {
  tax = (taxableincome * 25) / 100;
  net = gross - tax - nssfdeduction - nhifdeduction;
} else if (gross >= 32334 && gross <= 500000) {
  tax = (taxableincome * 30) / 100;
  net = gross - tax - nssfdeduction - nhifdeduction;
} else if (gross >= 500001 && gross <= 800000) {
  tax = (taxableincome * 32.5) / 100;
  net = gross - tax - nssfdeduction - nhifdeduction;
} else if (gross >= 800000) {
  tax = (taxableincome * 35) / 100;
  net = gross - tax - nssfdeduction - nhifdeduction;
}

alert(
  "Your gross is: " +
    gross +
    "\n" +
    "Your tax is: " +
    tax +
    "\n" +
    "your nssfdeduction:" +
    nssfdeduction +
    "\n" +
    "your nhifdeduction is:" +
    nhifdeduction +
    "\n" +
    "your net is:" +
    net
);

// displays gross, tax ,nssfdeduction, nhifdeduction and net
```

The ("\n") joins the gross, tax ,nssfdeduction, nhifdeduction and net

like this:

![screenshot](https://github.com/allvintageisack/code-challenge-one-/assets/155476834/e9823e0b-8a68-421a-9134-1e87a4acd77b)

# Licence

[license](license.txt)
