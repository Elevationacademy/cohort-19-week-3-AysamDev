const items = {
    
}

$('#items').on('click','.item',function()
{
    if($(this).data().instock)
    {
        if(items[$(this).text()] == undefined)
        {
            items[$(this).text()] = 1
            $('#cart').append(`<div class=cart-item>${$(this).text()}</div>`)
        }
        else
        {
            items[$(this).text()] += 1
            $('#cart').text((`${$(this).text()}s x${items[$(this).text()]}`))
        }

        
    }

})

$('#cart').on('click','cart-item',function(){
    console.log("hey")
    items[$(this).text()] -= 1
    $(this).remove()
})