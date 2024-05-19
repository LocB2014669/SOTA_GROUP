import axios from "axios";
import apiLink from "../constants/apiLink";

export const getAllProduct = async ({}) => {
  try {
    // const { data } = await axios.get(`https://loc.bendeptrai.com/backend/api/product.php`);
    const { data } = await axios.get(`${apiLink.link}/product.php`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async ({ productId }) => {
  try {
    // const { data } = await axios.get(
    //   `https://loc.bendeptrai.com/backend/api/productById.php?id=${productId}`
    // );
    const { data } = await axios.get(
      `${apiLink.link}/productById.php?id=${productId}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPhotoGallery = async ({ productId }) => {
  try {
    // const { data } = await axios.get(
    //   `https://loc.bendeptrai.com/backend/api/gallery.php?id=${productId}`
    // );
    const { data } = await axios.get(`${apiLink.link}/gallery.php?id=${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// ${apiLink}/productById.php?id=754

export const getAllBrand = async ({}) => {
  try {
    // const { data } = await axios.get(
    //   `https://loc.bendeptrai.com/backend/api/product_brand.php`
    // );
    const { data } = await axios.get(`${apiLink.link}/product_brand.php`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getAllProduct = async (filters) => {
//   try {
//     const { data } = await axios.get(
//       "${apiLink}/product.php",
//       {
//         params: filters
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error; // Rethrow error để có thể xử lý ở phía gọi hàm nếu cần
//   }
// };
