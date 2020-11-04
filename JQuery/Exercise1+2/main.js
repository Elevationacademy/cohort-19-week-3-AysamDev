


const input = '<input id=my-input placeholder="Human Name" type="text">'
$('body').append(input)
const button = '<button id=humanadder>Add Human</button>'
console.log(button)
$('body').append(button)

$('#humanadder').on('click',function()
{

  let user = `<li class=user>${$('#my-input').val()}</li>`
  console.log(user)
  $('#users').append(user)
})

$('#users').on('click','.user',function()
{
  $(this).remove()
})