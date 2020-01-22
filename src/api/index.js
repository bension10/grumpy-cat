const cats_api_url = 'https://api.thecatapi.com/v1/';

const CATS_API = {
  async getData(endpoint) {
    const response = await fetch(cats_api_url + endpoint);
    const data = await response.json();
    return data;
  }
}

export default CATS_API;