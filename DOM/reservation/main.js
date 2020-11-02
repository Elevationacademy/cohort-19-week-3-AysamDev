const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}
openTables = false

const checkReservation = function(name)
{
  let result = document.getElementById("result")
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  //save the name.
  console.log(name)
  if(reservations[name] === undefined)
  {
        if(openTables)
    {
      
        reservations[name.toLowerCase()] = {claimed: true}
        result.innerHTML = "you are welcomed to the restaurant"
        console.log("you are welcomed to the restaurant")
       
    }
    else
    {
        console.log("You have no reservation")
        result.innerHTML = "You have no reservation"
        
    }
  }
  else if(reservations[name].claimed == false)
  {
    console.log("welcome "+name)
    result.innerHTML = "welcome "+name
  }
   else
  {
    console.log("Hmm, someone already claimed this reservation")
    result.innerHTML = "Hmm, someone already claimed this reservation"
  }
  
}

let button = document.getElementById("checkRev")
let input = document.getElementById("input-name")

button.onclick = function()
{
  checkReservation(input.value)
}