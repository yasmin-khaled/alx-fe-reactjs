import axios from "axios";
import { baseURL } from './config';

export const fetchUserData = async (username) => {
  const response = await axios.get(`${baseURL}/users/${username}`);
  console.log(response.data);
  return response.data;
};

export const fetchAdvancedSearchResults = async (query) => {
  const response = await axios.get(`${baseURL}/search/users?q=${query}`);
  return response.data.items;
};

export default fetchUserData;
