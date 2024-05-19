import axios from "axios";
import apiLink from "../constants/apiLink";

export const getImgBanner = async ({}) => {
  try {
    const { data } = await axios.get(
      // "https://loc.bendeptrai.com/backend/api/banner.php"
      `${apiLink.link}/banner.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
