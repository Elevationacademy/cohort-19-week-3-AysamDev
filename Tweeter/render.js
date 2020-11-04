const Renderer = function()
{
    const renderPosts = function(posts)
    {
        $('#posts').remove()
        for(let post of posts)
        {
            const ay = $(`<div class=post data-id=${post.id}>Post:${post.text}</div>`)
            console.log(ay.text())
            $('#posts1').append(ay)
            $('#posts1').append($('<br></br>'))
            for(let comment of post.comments)
            {
                const cm = $(`<div class=comments data-id=${comment.id}>Comment:${comment.text}</div>`)
                $('#posts1').append(cm)
            }
            $('#posts1').append($('<br></br>'))

        }
    }

    return{
        renderPosts
    }
}
