import axios from "axios";

// const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "18815450-007739eb5f1c89a4d6d918d62";

// axios.defaults.baseURL = BASE_URL

// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// }

// const apiService = async ({ query, page }) => {
//   const { data } = await axios.get('', {
//     params: { query, page },
//   });
//   return data.hits
// };
const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;
