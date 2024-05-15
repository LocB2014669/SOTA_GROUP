import axios from "axios";

export const getPhotoNews = async ({}) => {
  try {
    const { data } = await axios.get(
      "http://public_html.test/backend/api/news.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
