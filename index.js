console.log(this);

const obj = {
    fn: function () {
        console.log(this)
    },
    fn2: () => {
        console.log(this);
    }
}

obj.fn() ; //refer to object
 obj.fn2(); // - refer to window

//referring to windows
function x() {
    console.log(this);
    function y(){
        console.log(this);
        function z() {
            console.log(this);
        }
        z();
    }
    y();
}
// x();

const xyz = () => {
    console.log(this);
    const y = () => {
        console.log("y in arrow" , this);
    }
    y();
}
console.log("XYZ Arrow function")
xyz();

var person = {
    name: 'Roopa',
    firstName: 'One Plus',
    print: function() {
        console.log("arguments" , arguments);
        console.log(this);
    },
    print1: () =>{
        console.log("print1" , this);
    },
    print2: function() {
        console.log("print2" ,this);
    }
}
var person2 = {
    name: 'Akshaya',
    person2Print: function() {
        console.log("print2 person2" , arguments);
    }
}

function abc() {
    console.log(this);
}
console.log("ABC call function");
abc();
abc.call(null);
abc.call(person);
abc.call(person2);
console.log("Aply method");
person2.person2Print.apply(null , ["Roopa" , "Akshay"])
// x.apply(person);
console.log("person calles");

person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);

console.log("WIth Arrow Functions")
person.print1();
person.print2();

person.print1.call();
person.print2.call(null);


function sum() {
    console.log(this);
    let sum =0;
    for(i=0; i < arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}

const result = sum.apply({name: 'Lotus' ,age: '25' } ,[5,10,35,20,50]);
console.log("result of sum" , result);

