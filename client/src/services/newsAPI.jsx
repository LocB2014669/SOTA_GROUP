import axios from "axios";

export const getPhotoNews = async ({}) => {
  try {
    const { data } = await axios.get(
      "https://sota-group-thto-5snt84q2t-locb2014669s-projects.vercel.app/backend/api/news.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
