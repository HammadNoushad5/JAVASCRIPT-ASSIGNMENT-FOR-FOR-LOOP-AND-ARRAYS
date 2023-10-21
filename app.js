// Question no 1

var Stop = 20
var Evennumbers = []

for(var i=2; i <= Stop ; i+=2 ){
    Evennumbers.push(i)
}
document.write(Evennumbers)

// Question no 2

var Stop = 30
var Oddnumbers = []

for(var i=3 ; i <=Stop ; i+=3){
    Oddnumbers.push(i)
}
document.write("  " + " "  + Oddnumbers)


// Question no 03


    for (var i = 1; i <= 50; i++) {
    
        if (i % 2 === 0) {
        console.log("Even: " + i);
    } else {
        console.log("Odd: " + i);
    }
}

// Question no 4

// var Numbers = 10


// for (var i = 1; i <= Numbers; i++){
//     var Rows = [];

//     for ( var j = 1 ; j <= i ; j++ ){
//         Rows +=j;
//     }
// }
// console.log(Rows);

// Question NO 4 SMJH NH AYA KESE KRNA H SIR YE BS STRAIGHT LINE M AJA RHA H 

// Question no 5

var students = [
    { Name: "Ammad", 
    Age: 24, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Rohan",
     Age: 23,
     Class: "WEB DEVELOPMENT" },
    { Name: "Ahmed", 
    Age: 21, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Hammad", 
    Age: 23, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Zeeshan", 
    Age: 26, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Ahsan", 
    Age: 25, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Saqib", 
    Age: 21, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Yousuf", 
    Age: 21, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Ameer Hamza", 
    Age: 21, 
    Class: "WEB DEVELOPMENT" },
    { Name: "Kawish", 
    Age: 21, 
    Class: "WEB DEVELOPMENT" },
   
]
for (var i = 0; i < students.length; i++) {
    
    console.log("Name:" + students[i].Name)
    console.log("Age:" + students[i].Age)
    console.log("Class:" + students[i].Class)
}

