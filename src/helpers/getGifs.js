const api_key = 'mV6a9dngFlGSbFLmOrUct3no8xPzHHYL';
const limit = 20;

export const getGifs = async(category) => {
    const url = 
        `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;
            
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;
}