function getCharacter() {
    const name = document.getElementById('search').value
    getApiData(name)
}

async function getApiData(name) {
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=354550dfaf54c663d28de06e80a30016&hash=8f5a00af4ab72412c555949e2bc247fd`);
        document.getElementById('cname').innerHTML = response.data.data.results[0].name
        document.getElementById('desc').innerHTML = response.data.data.results[0].description
        document.getElementById('heroesIcon').src = `${response.data.data.results[0].thumbnail.path}/portrait_xlarge.${response.data.data.results[0].thumbnail.extension}`
        console.log(response);
    } catch (error) {
        document.getElementById('cname').innerHTML = error;
        console.log(error)
    }

}
