let name = document.getElementById("input-name")
let birthday = document.getElementById("input-birthday")
let phone = document.getElementById("input-phone")
let salary = document.getElementById("input-salary")
let label = document.createElement('label')
let form = document.getElementById('input-form')
label.setAttribute('class','alert-label')
console.log(name.innerHTML)
console.log(birthday.innerHTML)
console.log(phone)
console.log(salary)

linebreak = document.createElement("br");
form.appendChild(linebreak);

const validate = function()
{
  let name = document.getElementById("input-name")
  let birthday = document.getElementById("input-birthday")
  let phone = document.getElementById("input-phone")
  let salary = document.getElementById("input-salary")
  let form = document.getElementById('input-form')
  let cont = document.getElementById('container')
  let valName = name.value
  console.log(valName.length)
  let valBirthday = birthday.value
  let valPhone = phone.value
  let valSalary = salary.value

  
  if(valName.length < 3)
  {
    label.innerHTML = "name is missing"
    alert("Name length must be more than 2");
    return false
   
  }
  if(valBirthday == "")
  {
    alert("insert birthday date");
    label.innerHTML = "Birthday date is missing"
    return false
  }
  if(valPhone.length != 10)
  {
    alert("Number must be 10 digits");
    label.innerHTML = "phone number is missing"
    return false
  }
  if(!(valSalary > 10000 && valSalary <= 16000))
  {
    alert("Salary must be between 10,000 - 16,0000");
    label.innerHTML = "salary is missing"
    return false
  }

  cont.style.display = "none"
  const welcome = document.createElement("h1")
  welcome.innerHTML = "Welcome in, " + valName
  welcome.style.color = "green"
  document.body.appendChild(welcome)
  return true
}

form.appendChild(label)