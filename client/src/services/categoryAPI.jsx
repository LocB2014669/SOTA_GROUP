import axios from "axios";
import apiLink from "../constants/apiLink";

export const getAllCate = async ({}) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/product_list.php"
      `${apiLink}/product_list.php`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
