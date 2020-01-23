const cats_api_url = 'https://api.thecatapi.com/v1/';

const CATS_API = {
  getData: async (url) => {
    const response = await fetch(cats_api_url + url);
    const data = await response.json();
    return data;
  }
}

export default CATS_API;