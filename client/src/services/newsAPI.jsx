import axios from "axios";
import apiLink from "../constants/apiLink";

export const getPhotoNews = async ({}) => {
  try {
    const { data } = await axios.get(
      `https://loc.bendeptrai.com/backend/api/news.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPolicyNews = async ({}) => {
  try {
    const { data } = await axios.get(
      `https://loc.bendeptrai.com/backend/api/news_policy.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNewsById = async ({ newsId }) => {
  try {
    const { data } = await axios.get(
      // `${apiLink}/news_ById.php?id=${newsId}`
      `https://loc.bendeptrai.com/backend/api/news_ById.php?id=${newsId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
