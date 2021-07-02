import axios from "axios";

export const getBatmanShows = async () => {
  const response = await axios.get(
    "http://api.tvmaze.com/search/shows?q=batman"
  );

  return response.status === 200 ? response.data : [];
};

export const getBatmanShow = async (id) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);

  return response.status === 200 ? response.data : [];
};
