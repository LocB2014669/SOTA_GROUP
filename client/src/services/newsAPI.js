import axios from "axios";
import apiLink from "../constants/apiLink";

export const getPhotoNews = async ({}) => {
  try {
    // const { data } = await axios.get(
    //   `https://loc.bendeptrai.com/backend/api/news.php`
    // );
    const { data } = await axios.get(`${apiLink.link}/news.php`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPolicyNews = async ({}) => {
  try {
    // const { data } = await axios.get(
    //   `https://loc.bendeptrai.com/backend/api/news_policy.php`
    // );
    const { data } = await axios.get(`${apiLink.link}/news.php`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNewsById = async ({ newsId }) => {
  try {
    const { data } = await axios.get(
      // `https://loc.bendeptrai.com/backend/api/news_ById.php?id=${newsId}`
      `${apiLink.link}/news_ById.php?id=${newsId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
