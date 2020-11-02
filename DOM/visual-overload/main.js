const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  console.log(niceColors[randomPosition])
  return niceColors[randomPosition];
}

let div = document.getElementById("container")
for(let i = 0;i<6;i++)
{
  let box = document.createElement('div')
  box.style.backgroundColor = getRandomColor()
  console.log(box)
  box.setAttribute("class","box")
  box.onmouseenter = function()
  {
    box.style.backgroundColor = getRandomColor()
  }
  div.appendChild(box)
  
}

