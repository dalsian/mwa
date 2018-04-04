window.onload = function() {

//Ex1
const items = Array.from(document.querySelectorAll('[data-time]'));

console.log(items.filter(item=>item.textContent === "ECMA6")
                .map(item=>item.getAttribute('data-time').split(":")[1])
                .reduce((sum, time)=>sum+parseInt(time), 0));

//Ex2
var library = [
    {prof:'Assad Sadd5', course: 'WAP', courseID:'CS452'},
    {prof:'Assad Sadd2', course: 'AWA', courseID:'CS555'},
    {prof:'Assad Sadd3', course: 'MAP', courseID:'CS455'}
];
//console.log(library.sort((a,b)=>(a.course > b.course ? 1 : (a.course < b.course ? -1 : 0))));
console.log(library.sort((a,b)=>a.course > b.course));

//Ex3
const numbers = [3,62,22,34,2434,22,77,43,88,90];
console.log(numbers.filter(number=>number>70));

//Ex4
class BMICalculator {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    isValid() {
        if(!parseFloat(this.weight) || !parseFloat(this.height)) {
            return false;
        }
        return true;
    }
    getBMI() {
        return parseFloat(this.weight)/parseFloat(this.height);
    }
    showStatus() {

    }
}

document.getElementById("calculate").onclick = function() {
    console.log("========BMI Calculator=========");
    const cal = new BMICalculator(document.getElementsByName("height")[0].value,
                                    document.getElementsByName("weight")[0].value);
    console.log(`Is valid ? ${cal.isValid()}`);
    console.log(`BMI = ${cal.getBMI()}`);
    document.getElementById("output").innerHTML = cal.getBMI();
};

//Ex5
function Person(name) {
    this.name = name;
}
Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

const teacherA = new Person("Teacher A");
teacherA.teach("Mathematics");
const teacherB = new Person("Teacher B");
teacherB.teach("Mathematics");
teacherA.teach("Physics");

//Ex6
String.prototype.filter = function(words) {
    return words.reduce((str, word) => str.replace(word, "***"), this);
};
console.log("This is a nice house!".filter(["house", "nice"]));


//Ex7
Array.prototype.bubbleSort = function() {
    let ary = this;
    ary.forEach((e1, i) => ary.forEach((e2, j) => 
            {if (e2 > e1) [ary[i], ary[j]] = [ary[j], ary[i]];}));
    return ary;
};
console.log(`Sorted >>> ${[-1,4,0,6,-2,1].bubbleSort()}`);

};
