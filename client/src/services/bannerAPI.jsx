import axios from "axios";

export const getImgBanner = async ({}) => {
  try {
    const { data } = await axios.get(
      "http://localhost/public_html/backend/api/banner.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
