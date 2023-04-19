async function fetchGifs() {
  //Fetching 10 gifs same time 
  const urls = []
  for (let i = 0; i < 10; i++) {
    const url = import.meta.env.VITE_SOME_KEY;
    urls.push(url);
  }
  // To display them in same time i used Promise.all
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    const gifs = data.map(gif => gif.data.images.fixed_height.url)
    return gifs;
  }
  catch (error) {
    console.error('ERRRR SOMETHING WENT WRONG')
  }

}

async function fetchJokes() {
  try {
    //Fetching 10 jokes
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=twopart&amount=10')
    const data = await response.json();
    return data.jokes
  }
  catch (error) {
    console.error('ERRRR SOMETHING WENT WRONG')
  }
}

export { fetchGifs, fetchJokes }