const SongsManager = function()
{
    const songs =
    {

    }

    const addSong = function(song,url)
    {
        const link = url.split("=")
        songs[song] = link[1]
        console.log(songs)
    }

    const getSong = function(desired)
    {
        console.log("https://www.youtube.com/watch?v="+ songs[desired])
    }

    return{
        addSong,
        getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


