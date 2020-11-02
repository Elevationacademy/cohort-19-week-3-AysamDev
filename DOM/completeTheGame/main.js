console.log(document)
let playfield = document.getElementById('playing-field')
console.log(playfield)
playfield.style.backgroundColor = "blue"


console.log(playfield.innerHTML)

let block = document.getElementById('block')
block.style.backgroundColor = "yellow"

const moveRight = function(){
    let increment = parseInt(block.style.left ) || 0
    increment += 15
    console.log(increment)
    increment += "px"
    console.log(increment)
    block.style.left = increment
    
  }

  const moveLeft = function(){
    let increment = parseInt(block.style.left ) || 0
    increment -= 15
    console.log(increment)
    increment += "px"
    console.log(increment)
    block.style.left = increment
    
  }
  const moveUp = function(){
    console.log(block.style.up)
    let increment = parseInt(block.style.top ) || 0
    increment -= 15
    console.log(increment)
    increment += "px"
    console.log(increment)
    block.style.top = increment
    
  }
  const moveDown = function(){
    let increment = parseInt(block.style.top ) || 0
    increment += 15
    console.log(increment)
    increment += "px"
    console.log(increment)
    block.style.top = increment
    console.log(block)
    
  }

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

header.setAttribute("class", "my-header")
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by:Aysam Salalha"
subHeader.setAttribute('class','sub-header')
document.body.appendChild(subHeader)
//clickUp
let clickUp = document.getElementById("up")
clickUp.onclick = function()
{
    moveUp()
}
//clickDown
let clickDown = document.getElementById("down")
clickDown.onclick = function()
{
    moveDown()
}

//clickRight
let clickRight = document.getElementById("right")
clickRight.onclick = function()
{
    moveRight()
}
//clickLeft
let clickLeft = document.getElementById("left")
clickLeft.onclick = function()
{
    moveLeft()
}
console.log(clickLeft)

document.onkeydown = checkKey

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
       moveLeft();
    }
    else if (e.keyCode == '39') {
      moveRight();
    }

}