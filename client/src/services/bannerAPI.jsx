import axios from "axios";
import apiLink from "../constants/apiLink";

export const getImgBanner = async ({}) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/banner.php"
      `${apiLink}/banner.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
