import axios from "axios";

const API_KEY = "18815450-007739eb5f1c89a4d6d918d62";

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;
