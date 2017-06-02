var counter = 0;

function toDo()
{
    var input  = document.getElementById('to').value;
    var p1 = document.createElement('li')


    var text  = document.createTextNode(input)
    p1.appendChild(text)
p1.id = (counter++);
   // var p2 = document.createElement('ul')


 //   p2.appendChild(p1)


       document.getElementById('myUl').appendChild(p1)

}




function removeLast()
{
  var element  = document.getElementById(--counter)
  document.getElementById("myUl").removeChild(element)
    
}

function removeAll()
{
  for(var i = 0 ; i < counter;i++)
  {

  var element  = document.getElementById(i)
  document.getElementById("myUl").removeChild(element)
  
}
counter = 0;
}

