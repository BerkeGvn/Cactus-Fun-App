async function fetchGifs() {
  try {
    const response = await fetch(import.meta.env.VITE_SOME_KEY)
    const data = await response.json()
    console.log(data.data.images.original.url)
    return data.data.images.fixed_height.url
  }
  catch (error) {
    console.error('ERRRR SOMETHING WENT WRONG')
  }

}


export { fetchGifs }