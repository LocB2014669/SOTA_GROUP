import axios from "axios";

export const getAllProduct = async ({}) => {
  try {
    const { data } = await axios.get(`${apiLink}/product.php`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async ({ productId }) => {
  try {
    const { data } = await axios.get(
      `${apiLink}/productById.php?id=${productId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPhotoGallery = async ({ productId }) => {
  try {
    const { data } = await axios.get(`${apiLink}/gallery.php?id=${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// ${apiLink}/productById.php?id=754

export const getAllBrand = async ({}) => {
  try {
    const { data } = await axios.get(`${apiLink}/product_brand.php`);
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
