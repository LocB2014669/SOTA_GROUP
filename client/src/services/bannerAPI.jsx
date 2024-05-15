import axios from "axios";

export const getImgBanner = async ({}) => {
  try {
    const { data } = await axios.get(
      "https://sota-group-thto-5snt84q2t-locb2014669s-projects.vercel.app/backend/api/banner.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
