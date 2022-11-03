const apiKey = 'Ivf2Jm4Zo8UeYKciBbP3OEHZc39aQEc5'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

peticion
    .then(resp=>resp.json())
    .then(({data})=>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
.catch(console.warn)