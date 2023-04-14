async function fetchGifs() {
  const urls = []

  for (let i = 0; i < 10; i++) {
    const url = import.meta.env.VITE_SOME_KEY;
    urls.push(url);
  }

  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    const gifs = data.map(item => item.data.images.fixed_height.url);
    return gifs;
  }
  catch (error) {
    console.error('ERRRR SOMETHING WENT WRONG')
  }

}


export { fetchGifs }