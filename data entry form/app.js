

function dataEntry()
{
document.getElementById('name1').innerHTML = Name;
document.getElementById('email1').innerHTML = Email;
document.getElementById('phone1').innerHTML = Num;
}

function createrTd()
{
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Num = document.getElementById('num').value;

   var a1 = document.createElement('td')
   var a2 = document.createElement('td')
   var a3 = document.createElement('td')

var text1 = document.createTextNode(Name)
var text2 = document.createTextNode(Email)
var text3 = document.createTextNode(Num)


a1.appendChild(text1)
a2.appendChild(text2)
a3.appendChild(text3)


var element1  = document.createElement('tr')

element1.appendChild(a1)
element1.appendChild(a2)
element1.appendChild(a3)

document.getElementById('myTable').appendChild(element1)





     var aa = document.getElementById('name').value;
       var ab = document.getElementById('email').value;
       var ac = document.getElementById('num').value;
      // alert(aa)

    if(aa == "user name" )
    {
   
        document.getElementById('name').value = "None";  
    } 
    else if(ab == "Email ID")
    {
        document.getElementById('email').value = "None";  

    }
    else if(ac == "Phone Number")
    {
        document.getElementById('num').value = "None";  

    }


}

function clr()
{
       var aa = document.getElementById('name').value;
       var ab = document.getElementById('email').value;
       var ac = document.getElementById('num').value;
      // alert(aa)

    if(aa == ' ')
    {
   
        document.getElementById('name').value = "user name";  
    } 
    else if(ab == ' ')
    {
        document.getElementById('email').value = "Email ID";  

    }
    else if(ac == ' ')
    {
        document.getElementById('num').value = "Phone Number";  

    }
    
}

function defaultValue()
{
    
}