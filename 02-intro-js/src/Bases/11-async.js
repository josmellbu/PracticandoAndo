//const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasdasd.com'))
//getImagenPromesa().then(console.log)
const getImage = async() => {
    try {
        const apiKey = 'Ivf2Jm4Zo8UeYKciBbP3OEHZc39aQEc5'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    const {data} = await resp.json();
    const {url} =  data.images.original;
    const img = document.createElement('img');
    img.src = url
    
    document.body.append( img );
    } catch (error) {
        console.error(error)
    }
}

getImage();