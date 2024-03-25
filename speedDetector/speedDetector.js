const speed = prompt("input speed of a car"); // gets the speed of a car

if (speed < 70) { //looking if the speed is less than 70
    alert("ok")
} else if (speed >= 70 && speed <= 75) {
    alert("demeritpoints 1")  

} else if (speed >= 75 && speed <= 80) {
    alert("demeritpoints 2")
}

else if (speed >= 80 && speed <= 85) {
    alert("demeritpoints 3")
}

else if (speed >= 85 && speed <= 90) {
    alert("demeritpoints 4")
}

else if (speed >= 90 && speed <= 100) {
    alert("demeritpoints 5")
}

else if (speed >= 100 && speed <= 105) {
    alert("demeritpoints 6")
}

else if (speed >= 105 && speed <= 110) {
    alert("demeritpoints 7")
}

else if (speed >= 110 && speed <= 115) {
    alert("demeritpoints 8")
}

else if (speed >= 115 && speed <= 120) {
    alert("demeritpoints 9")
}

else if (speed >= 120 && speed <= 125) {
    alert("demeritpoints 10")
}

else if (speed >= 125 && speed <= 130) {
    alert("demeritpoints 11")
}

else if (speed >= 130 && speed <= 135) {
    alert("demeritpoints 12")
}

else { // when points excede 12 license is suspended
    alert ("license suspended") 
}
