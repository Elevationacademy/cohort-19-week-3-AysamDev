const spans = $('span').addClass(`picker`)
console.log(spans)
for(let span of spans)
{
    console.log(span)
    $(span).css('background',$(span).data().color)
}


$('#colors').on('click','.picker',function()
{
    console.log($(this))
    $('.box').css('background',$(this).data().color)
})

