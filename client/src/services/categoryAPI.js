import axios from "axios";
import apiLink from "../constants/apiLink";

export const getAllCate = async ({}) => {
  try {
    const { data } = await axios.get(
      // "https://loc.bendeptrai.com/backend/api/product_list.php"
      `${apiLink}/product_list.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
