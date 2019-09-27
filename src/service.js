function getCharacter() {
    const name = document.getElementById('search').value
    getApiData(name)
}

async function getApiData(name) {
    try {
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters/${name}`);
        document.getElementById('cname').innerHTML = (response.data);
        console.log(response)
    } catch (error) {
        document.getElementById('cname').innerHTML = error
        console.log(error)
    }

}