const StringFormatter = function(){

  const capitalizeFirst = str => console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
  const skewerCase = str => console.log(str.replace(" ","-"))

  return{
    capitalizeFirst,
    skewerCase
  }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box