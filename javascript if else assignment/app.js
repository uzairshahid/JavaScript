// /Q1
var input = prompt("Enter your Name : ");
if(input != null)
{

    alert("Hi, "+ input);
}
//
//
// ///Q2
//
var input = +prompt("Enter valur for table",5);
for(var i = 0; i <=10; i++)
{
    document.write("</br>"+ input+" * " +i+" = "+input*i );
}
//
//
//
// //Q3
//
var input = prompt("please Enter Your City Name");
if(input == "karachi" || input == "Karachi" || input == "KARACHI")
{
    alert("Welcome To City Of light  :) ");
}
else if (input == "lahore" || input == "Lahore" || input == "LAHORE")
{
    alert("Welcome To City Of Heart  :P")
}
else if(input == "islamabad"||input == "Islamabad" || input == "ISLAMABAD")
{
    alert("Welcome To Capital Of Pakistan  (y)")
}

else
{
    alert("Welcome To "+input);
}
//
//
//
// ////Q4
//
var gender = prompt("Your Gender Please!")
if(gender == "male")
{
    alert(" Good Morning Sir");
}
else if(gender == "female")
{
    alert(" Good Morning Ma'am");
}
else
{
    alert("Invalid Input")
}
//
//
//
//
// ///Q5
//
var input = prompt("please Input Color For Road Trafic");
if(input == "red")
{
    alert("vehicles must stop")
}
else if(input == "yellow")
{
    alert("vehicles should get ready to move");
}
else if(input == "Green")
{
    alert("vehicles can move now");
}

else
{
    alert("Please Input Valid Color")
}

//
// ///Q6
//
var inputMaxAge = +prompt("please Enter Maximum Age");
var inputCurrentAge = +prompt("please Enter Current Age");
if(inputCurrentAge <= inputMaxAge)
{
    alert("You Are Welcome")
}
//
// //////Q7
var input = +prompt("please input remaining fuel");
if(input <= 0.25)
{
    alert("Please refill the fuel in your car")
}

else
{
    alert("Enjoy your Drive")
}
//
//
// ////Q8
//
var english = +prompt("Enter English Marks / 100");
var javaScript = +prompt("Enter JavaScript Marks / 100");
var math = +prompt("Enter Mathematics Marks / 100");
var obtained = english+javaScript+math;
var percentage = obtained/300 *100;


if(english > 100 || javaScript > 100 || math > 100)
{
    alert("you entered wrong marks!");
}

else if(obtained >= 240)
{
    document.write("<h1>"+"<b>"+"Marks Sheet"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Total Marks :"+300);
    document.write("</br>"+"Marks Obtained : "+ obtained);
    document.write("</br>"+"Percentage :"+percentage+"%");
    document.write("</br>"+"Grade : A-One");
    document.write("</br>"+"</b>"+"Remarks : Excellent");
}
else if(obtained >=210)
{ document.write("<h1>"+"<b>"+"Marks Sheet"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Total Marks :"+300);
    document.write("</br>"+"Marks Obtained : "+ obtained);
    document.write("</br>"+"Percentage :"+percentage+"%");
    document.write("</br>"+"Grade : A");
    document.write("</br>"+"<b>"+"Remarks : Good");
}
else if(obtained >= 210)
{ document.write("<h1>"+"<b>"+"Marks Sheet"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Total Marks :"+300);
    document.write("</br>"+"Marks Obtained : "+ obtained);
    document.write("</br>"+"Percentage :"+percentage+"%");
    document.write("</br>"+"Grade : B");
    document.write("</br>"+"<b>"+"Remarks : You Need To Improve");
}
else if(obtained < 210)
{ document.write("<h1>"+"<b>"+"Marks Sheet"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Total Marks :"+300);
    document.write("</br>"+"Marks Obtained : "+ obtained);
    document.write("</br>"+"Percentage :"+percentage+"%");
    document.write("</br>"+"Grade : F");
    document.write("</br>"+"<b>"+"Remarks : Sorry");
}
//
//
//
// ///Q9
//
var item1 = prompt("Name Of Item No 1");
var price1 = prompt("Price Of Item 1");
var quantity1 = prompt("Quantity Of Item 1")
var item2 = prompt("Name Of Item No 2");
var price2 = prompt("Price Of Item 2");
var quantity2 = prompt("Quantity Of Item 2")
var shiping = +prompt("Shipping Charges")
var totalCost1 = price1*item1;
var totalCost2 = price2*item2;
var finalCost = totalCost1+totalCost2+shiping;
//var discount = finalCost*0.1;
var nondis = price2+price1+shiping;
if(finalCost > 1999)
{

    document.write("<h1>"+"<b>"+"Shopping Cart"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Price Of "+item1+" Is :"+price1);
    document.write("</br>"+"Quantity Of "+item1 + " Is :"+ quantity1);
    document.write("</br>"+"Price Of "+item2+" Is :"+price2);
    document.write("</br>"+"Quantity Of "+item2 + " Is :"+ quantity2);
    document.write("</br>"+"Shipping Charges : "+shiping);
    document.write("</br>"+"Total Cost Of Your Order Is "+nondis+" PKR");
    finalCost  = finalCost*0.1;
    document.write("</br>"+"Discount Price Is "+finalCost+" PKR")
}
//
else
{
    document.write("<h1>"+"<b>"+"Shopping Cart"+"</b></h1>")
    document.write("</br>"+"</br>"+"</br>"+"</br>"+"</br>"+"Price Of "+item1+" Is :"+price1);
    document.write("</br>"+"Quantity Of "+item1 + " Is :"+ quantity1);
    document.write("</br>"+"Price Of "+item2+" Is :"+price2);
    document.write("</br>"+"Quantity Of "+item2 + " Is :"+ quantity2);
    document.write("</br>"+"Shipping Charges : "+shiping);
    document.write("</br>"+"Total Cost Of Your Order Is "+nondis+" PKR");

}

//
//
//////Q10
var variable  =  5;
var user  =  +prompt("Enter Guess Number Between 1 to 10")
if (user == variable)
{
    alert("Bingo! Correct answer")
}
else if (user == variable+1)
{
    alert("Close enough to the correct answer")
}
else if (user == variable-1)
{
    alert("Close enough to the correct answer")
}
else
{
    alert("Wrong Guess")
}



//////Q11
var input  =  +prompt("Input Number For Check That Its Divide By 3 Or Not!")
if(input % 3 == 0)
{
    alert("Yes it can be divide by 3 ")
}
else
{
    alert("No It Can`t")
}


/////////Q13
var team1Name =  prompt("Enter Team 1 Name")
var team1Score  =+prompt("Enter Score Of "+ team1Name)
var team2Name =  prompt("Enter Team 2 Name")
var team2Score  =+prompt("Enter Score Of "+ team2Name)

if (team1Score == team2Score)
{
    alert("Tie")
}
else if (team1Score > team2Score)
{
    alert("Team " + team1Name+" Won")
}

else if (team1Score < team2Score)
{
    alert("Team " + team2Name+" Won")
}

/////Q14
var str  = 'hello';
var num = 520;
var bool  = true;
var n = typeof str;
alert("type of hello is "+ n)

////////Q15
var str  = 'hello';
var num = 520;
var bool  = true;
var s = typeof str;
var n = typeof num;
alert("type of 520 is "+n)

//////Q16
var str  = 'hello';
var num = 520;
var bool  = true;
var s = typeof str;
var n = typeof num;
var b = typeof bool
alert("type of true is "+b)



///////Q17
var input = +prompt("Enter Number For Check This Is Even Or Odd")
if(input%2 == 0)
{
    alert("Even")
}
else
{
    alert("Odd")
}


///Q18
var T = +prompt("Enter Temperature For Check Weather")
if (T >= 40)
{
    alert("It is too hot outside")
}
else if(T>=30)
{
    alert("The Weather today is Normal")
}
else if (T>= 20)
{
    alert("Today’s Weather is cool")
}
else if(T>= 10)
{
    alert("OMG! Today’s weather is so Cool")
}


///////Q19
var firstNumber = +prompt("Enter First Value");
var secondNumber = +prompt("Enter Second Value");
var operator = prompt("Enter Operator");
if (operator == "+")
{
    alert(firstNumber +"+"+secondNumber+"="+ (firstNumber+secondNumber))
}
else if (operator == "-")
{
    alert(firstNumber +"-"+secondNumber+"="+ (firstNumber-secondNumber))
}
else if (operator == "*")
{
    alert(firstNumber +"*"+secondNumber+"="+ (firstNumber*secondNumber))
}
else if (operator == "/")
{
    alert(firstNumber +"/"+secondNumber+"="+ (firstNumber/secondNumber))
}
else if (operator == "%")
{
    alert(firstNumber +"%"+secondNumber+"="+ (firstNumber%secondNumber))
}
else
{
    alert("invalid Operator Or Value")
}



//////Q20
var input = prompt("Enter day name")
if (input == "monday" || input == "tuesday" || input == "wednesday" || input == "thursday" || input == "friday")
{
    alert("Its Working Day");
}
else if (input == "saturday" || input == "sunday")
{
    alert("Its Weekend")
}
else
{
    alert("undefined day")
}


/////Q21
var score = +prompt("Enter Your Score")
if (score >= 50)
{
    alert("You Passed");

}
else
{
    alert("try again")
}


///////Q22
var inpputA = +prompt("Enter First Number")
var inpputB = +prompt("Enter Second Number")
if (inpputA > inpputB)
{
    alert("The greater number of "+inpputA + " and " +inpputB+" is "+inpputA);
}

else if (inpputA < inpputB)
{
    alert("The greater number of "+inpputA + " and " +inpputB+" is "+inpputB);
}

else if(inpputA == inpputB)
{
    alert("both values are equal")
}


//////Q23
var language = prompt("Enter language")
if (language == "en")
{
    alert("Hello World")
}
else if (language == "es")
{
    alert("Saluton mondo")
}

else if (language == "de")
{
    alert("Hej Verden")
}


//////Q24
var num = +prompt("Enter Number");
var noun = prompt("Enter Noun");

alert(num+" "+noun)



