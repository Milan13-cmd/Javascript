

let testscore = 92;
let letterGrade;

switch(true){

    case testscore >= 90:
    letterGrade ="A";
    break;

    case testscore >=80:
    letterGrade ="B";
   break;
        
    case testscore >= 70:
    letterGrade ="C";
    break;
    case testscore >= 60:
    letterGrade ="D";
    break;
    case testscore >= 50:
    letterGrade ="E";
    break;    

    default:
    letterGrade ="F";
}          

console.log(letterGrade)