

var lastName="NoteBook";
var lastLetterOfLastName=lastName[lastName.length-1];
console.log(lastLetterOfLastName);



var myGlobal=10;
function fun1(){
     oopsGlobal=5;
}
function fun2(){
    var output="";
    if (typeof myGlobal !="undefined"){
        output += "myGlobal: " + myGlobal;
    }  
    if(typeof oopsGlobal !="undefined"){
        output += "oopsGlobal: " + oopsGlobal;
}}
fun1()
fun2()
console.log(output);
