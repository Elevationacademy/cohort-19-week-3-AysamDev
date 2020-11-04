const posts = [
    {name: "Aysam",
    text: "hello my name is Aysam"
    },
    {
    name: "Ragad",
    text: "hello my name is Ragad"
    }
]

const render = function(){
    $('#container').empty()
    for(let post of posts)
    {
        $('#container').append($(`<div class=wish>${post.name}: ${post.text}</div>`))
    }
}
render()

$('#submit').on('click',function()
{
    let name = $('#name').val()
    let wish = $('#text').val()
    $('#name').val("")
    $('#text').val("")
    posts.push({name: name,text: wish})
    render()
})


//Extension

$('#container').on('click','.wish',function()
{
    $(this).closest('.wish').remove()

})