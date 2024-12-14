import axios from "axios";
import { baseURL } from './config';

//const baseURL = "https://api.github.com";
export const fetchUserData = async (username) => {
  const response = await axios.get(`${baseURL}/users/${username}`);
  return response.data;
};

export const fetchAdvancedSearch = async (query, location = '', minRepos = '', page = 1, perPage = 10) => {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:${minRepos}`;
let x = `https://api.github.com/search/users?q=${searchQuery}&page=${page}&per_page=${perPage}`;
    const response = await axios.get(x);
    return response.data.items;
  } catch (error) {
    throw new Error(`Search failed ${error}`);
  }
};

