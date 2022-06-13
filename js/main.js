document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const albumName = document.querySelector('input').value
    try{
        const response = await fetch(`https://porter-robinson-api.herokuapp.com/api/${albumName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('albumName').innerText = data.name
        document.getElementById('songCount').innerText = data.songCount
        document.getElementById('releaseYear').innerText = data.releaseYear
        document.getElementById('albumCover').src = data.albumImage
    } catch(error){
        console.log(error)
    }
}