import { defineStore } from "pinia";
import axios from 'axios';
import type {Article} from "~/types/api";

export const useStore = defineStore('store', () => {
  // state
  const searchValue = ref<string>("korea");
  const articleList = ref<Article[]>([]);

  // mutations
  const changeSearchValue = (payload : string) => {
    searchValue.value = payload;
  };

  const getNews = async () => {
    const API_KEY = "c01b0aad4aae4f0eba977b610bc44736";
    const API_URL = `https://newsapi.org/v2/everything?q=${searchValue.value}&from=2024-07-01&sortBy=popularity&apiKey=${API_KEY}`;

    try {
      articleList.value = await axios.get(API_URL)
        .then((response) => {
           return response.data.articles;
        });
    } catch (error) {
      console.log(error);
    }
  }

  return { searchValue, articleList, changeSearchValue, getNews }
});
