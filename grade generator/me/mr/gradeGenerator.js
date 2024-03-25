const marks = prompt("Enter student marks: ") // Collecting user input

if (marks >= 0 && marks <= 100) {  //checking that a input is between 0 and 100
    if (marks > 79) { //checking if marks is greater than 79
        alert("A")
    } else if (marks >= 60 && marks <= 79) { //checking if marks is in between 60 and 79 
        alert("B")
    } else if (marks <= 59 && marks >= 49) { 
        alert("C")
    } else if (marks >= 40 && marks <= 49) {  
        alert("D")
    } else {
        alert("E") 
    }
} 
// compelling the user to input a valid value
else { 
    alert("Enter a valid value")
}
