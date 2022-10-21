//alert("Hello World");

/*var test;
test="Hello world";
var test1="Hi!!!";
alert(test1);
alert(test);*/

/*var num = 5;
num = num + 1;
alert(num);*/

/*var num = 5;
num += 1;
alert(num);*/

/*var num = 5;
num++;
alert(num);*/

/*var num = 5;

alert(num++);
alert(++num);*/

/*var text1="Hello";
var text2="World";

console.log(text1+text2);

var text1="Hello";
var text2=" World";

console.log( text1 + text2 );

var text1="Hello";
var text2=5;

console.log(text1+text2);

var text1="Hello";
var text2=5;

console.log(text1+text2+5);

var text1="Hello";
var text2=5;

console.log(text1+(text2+5));*/

/*var user=prompt("What is your name?");

console.log("Hello " + user);*/


/*var num=prompt("What is your fav num?");            //prompt takes only string value

console.log(5 + num);*/

/*var num=+prompt("What is your fav num?"); 

console.log(5 + num);*/

/*var num=prompt("What is your fav num?");            //something related to parsing (search later)
num=parse.int(num);
console.log(5 + num);*/

/*var num=prompt("What is your fav num?"); 
num=Number(num);
console.log(5 + num);*/

//var num=+prompt("What is your fav num?"); 

//console.log(num===5);

/*if (num % 2 === 0) 
{
    console.log("This is an even number!");
}
else
{
    console.log("This is an odd number!");
}*/

/*for (var i=0 ; i<=99 ; i++)
{
    console.log("This is from loop " + i);
}*/

/*var table=prompt("Enter a no. ");

for (var i=1; i <=10; i++)
{
    console.log(table + "x" + i + "=" + table*i);      //prompt changes to integer cause multiplication
}*/

/*for (i=1 ; i<=5 ; i++)
{
    var star="" ;
    for (j=1 ; j<=i ; j++)
    {
        star=star + "* ";
    }
    console.log(star);
}*/

/*var a = "java";
a = a.toUpperCase();
console.log(a);*/

/*var str = "This is a string";
var str1 = str.slice(10, 16);
console.log(str1);*/

/*var str="tum kutte kutte ho";                 indexOf()   lastIndexOf()
str=str.replace("kutte","ache");
console.log(str);*/

// math.round()    math.ceil()      math.floor()

/*var num = Math.round(Math.random() * 100);
console.log(num);*/

/*var num = Math.round(Math.random() * 10);

var guess = +prompt("Guess the no. ");

if(num === guess)
{
    alert("Correct!");
}
else
{
    alert("Try Again!")
}*/

/*function expandLoris(){
    var slowLoris = document.getElementById("slowLoris");
    slowLoris.innerText = "This is new text.";
}*/

// Question 1

/*function number(num) {
    var reverseNum = Number(String(num).split("").reverse().join(""));
    console.log(reverseNum);
  }
  // number(45678);
  
  // Question 2
  
  function palindrome(string) {
    var splitString = string.split(" ");
    var count = 0;
    for (let i = 0; i < splitString.length; i++) {
      var reverseString = splitString[i].split("").reverse().join("");
      if (reverseString === splitString[i]) {
        console.log(splitString[i], "is palindrome");
        count += 1;
      }
    }
    console.log(count, " Palindrome words in a sentence");
  }
  // palindrome('lorem ipsum dolor madam what are you doing nan mom dad');
  
  // Question 3
  
  function combinationGenerator(str) {
    var comb;
    for (let i = 0; i < str.length; i++) {
      comb = str.slice(0, i + 1);
      console.log(comb);
    }
  }
  // combinationGenerator('cat')
  
  // Question 4
  
  function alphabiticalOrder(str) {
    console.log(str.split(" ").sort().join(" "));
  }
  // alphabiticalOrder('Muhammad Abdul');
  
  // Question 5
  
  function toUpperCaseFirstLetterOfEachWord(str) {
    var splitstr = str.split(" ");
    var words = [];
    var string;
    for (let i = 0; i < splitstr.length; i++) {
      words[i] = splitstr[i].charAt(0).toUpperCase() + splitstr[i].slice(1);
      string = words.join(" ");
    }
    console.log(string);
  }
  // toUpperCaseFirstLetterOfEachWord('muhammad abdul mustafa azmi');
  
  // Question 6
  function longestString(str) {
    var splitstr = str.split(" ");
    var longestString;
    for (let i = 0; i < splitstr.length; i++) {
      // longestString = splitstr[i];
      if (splitstr[i].length < splitstr[i + 1].length) {
        return longestString = splitstr[i + 1];
      }else{
          return longestString=splitstr[i];
      }
    }
  //   console.log(longestString);
  }
  // console.log(longestString("Muhammad AbdulMustafa Azmi"));
  
  // Question 7
  
  function countVowels(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      // console.log(count)
      if (vowels.includes(str.toLowerCase().charAt(i))) {
        count += 1;
      }
    }
    console.log("The sentence contain", count, "vowels");
  }
  // countVowels('I am Muhammad');
  
  // Question 8
  function prime(num) {
    // var isPrime = true;
    // if(num===1){
    //     return num+" is not prime number";
    // }
    // else if(num>=2){
    //     for(let i=2; i<num; i++){
    //         if(num%i===0){
    //             isPrime=!isPrime;
    //             break;
    //         }
    //     }
    //     if(isPrime){
    //         console.log("Given number is prime");
    //     }
    //     else{
    //         console.log("Given number is not prime");
    //     }
    // }
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return num+" is not prime";
    return num + " is prime";
  }
  // console.log(prime(4));
  // Question 9
  
  function typeOfParam(param) {
    return typeof param;
  }
  // console.log(typeOfParam());
  
  function findSecLargestAndLowestNum(...arr){
      if (Array.isArray(arr)) {
          arr=arr.sort();
          var secLowestNum = arr[1];
          var secLargestNum = arr[(arr.length - 1)];
          console.log(arr);
          console.log(secLowestNum);
          console.log(secLargestNum);
      }
      else{
          console.log("Please give an array");
      }
  }
  // findSecLargestAndLowestNum(3,2,1,5,4,9,7,8);*/

  class Automobile {
    Constructor(name, model, color,type) {
      this.name = name;
      this.model = model;
      this.color = color;
      this.type = type;
      this.start();
    }
    start(){
      console.log(`The ${this.name} is ready to drive`);
    }
    openDoor(){
      console.log(`Door is open`);
    }
    horn(){
      console.log(`The ${this.name} is horning`);
    }
    headLights(){
      console.log('Lights are on');
    }
    break(){
      console.log('break is working');
    }
    acceleration(){
      console.log('accelerator is working');
    }
    clutch(){
      console.log('working well');
    }
    gear(){
      console.log('works best');
    }
  }
  
  class Car extends Automobile{
      super(name, model, color,type)
      Constructor(maxSpeed,fuelAverage,price,door){
        this.maxSpeed = maxSpeed;
        this.fuelAverage = fuelAverage;
        this.price = price;
        this.door = door;
        this.acceleration();
        this.break();
        this.clutch();
        this.gear();
        this.headLights();
        this.horn();
      }
  }
  class Bus extends Automobile{
      super(name, model, color,type)
      Constructor(maxSpeed,fuelAverage,price,door,){
        this.maxSpeed = maxSpeed;
        this.fuelAverage = fuelAverage;
        this.price = price;
        this.door = door;
        this.acceleration();
        this.break();
        this.clutch();
        this.gear();
        this.headLights();
        this.horn();
      }
  }
  class Truck extends Automobile{
      super(name, model, color,type)
      Constructor(maxSpeed,fuelAverage,price,door,wheel){
        this.maxSpeed = maxSpeed;
        this.fuelAverage = fuelAverage;
        this.price = price;
        this.door = door;
        this.wheel = wheel;
        this.acceleration();
        this.break();
        this.clutch();
        this.gear();
        this.headLights();
        this.horn();
      }
  }
  
  const vehicle = new Automobile('Toyota','2018','Silver','Auto')
  const Car1 = new Car('250km/hr','8km/lit',560000,'Two Auto')
  const Bus1 = new Bus('300km/hr','7km/lit','400000','All Auto')
  const Truck1 = new Truck('450km/hr','5km/lit','750000','Auto','12')
  
  console.log(Car1)
  console.log(Bus1)
  console.log(Truck1)



