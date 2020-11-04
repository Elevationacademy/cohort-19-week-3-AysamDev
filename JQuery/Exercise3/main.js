
const box = `<div class=box></div>`
$('body').append(box)
$('body').append(box)

$('body').on('mouseover','.box',function()
{
    $(this).css('background','blue')
})
$('body').on('mouseleave','.box',function()
{
    $(this).css('background','#8e44ad')
})