// create object of student and cal total and percentage using func

stud = {
    name:"swapnil",
    science:90,
    math:99,
    marathi:80,
    history:86,
    english:98,
}
function percentage(){
total = stud.science+stud.math+stud.marathi+stud.history+stud.english;

perc = (total / 500)*100;
console.log("percentage: ", perc, "%")
}

percentage();