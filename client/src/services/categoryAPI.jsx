import axios from "axios";

export const getAllCate = async ({}) => {
  try {
    const { data } = await axios.get(
      "https://sota-group-thto-5snt84q2t-locb2014669s-projects.vercel.app/backend/api/product_list.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
