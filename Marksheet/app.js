var English = +prompt("enter English marks / 100");
if(English <= 100)
{
    English = English;
}
else
{
    English = 0;
    alert("you entered wrong marks")
    var English = +prompt("enter English marks again / 100");
}

var Urdu = +prompt("enter Urdu marks  / 100");
if(Urdu <= 100)
{
    Urdu = Urdu;
}
else
{
    English = 0;
    alert("you entered wrong marks")
    var Urdu = +prompt("enter Urdu marks again / 100");
}
var Math = +prompt("enter Math marks / 100");
if(Math <= 100)
{
    Math = Math;
}
else
{
    Math = 0;
    alert("you entered wrong marks")
    var Math = +prompt("enter Math marks again / 100");
}
var Programming = +prompt("enter Programming marks / 100");
if(Programming <= 100)
{
    Programming = Programming;
}
else
{
    Programming = 0;
    alert("you entered wrong marks")
    var Programming = +prompt("enter Programming marks again / 100");
}
var Islamiat = +prompt("enter Islamiat marks / 100");
if(Islamiat <= 100)
{
    Islamiat = Islamiat;
}
else
{
    Islamiat = 0;
    alert("you entered wrong marks")
    var Islamiat = +prompt("enter Islamiat marks again / 100");
}
var total = English+Urdu+Math+Programming+Islamiat;
// alert("Your total marks is " + total + "out of 500")

if(total >=460  && total <=500 )
{
    alert( "Congractulation your score is "+total+ "  and your grade is A+")
}
else if ( total >= 410 && total <=459)
{
    alert( "Congractulation your score is "+total+ "  and your grade is A")
}
else if ( total >= 350&& total <=409)
{
    alert( "Congractulation your score is "+total+ "  and your grade is B+")
}
else if ( total >= 300&& total <=349)
{
    alert( "Congractulation your score is "+total+ "  and your grade is B")
}
else if ( total >= 250&& total <=299)
{
    alert( "Congractulation your score is "+total+ "  and your grade is C")
}
else if ( total >= 0&& total <=249)
{
    alert( "Sorry your score is "+total+ "  and your grade is F")
}



