import axios from "axios";

export const getAllProduct = async ({}) => {
  try {
    const { data } = await axios.get(
      "http://localhost/public_html/backend/api/product.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async ({ productId }) => {
  try {
    const { data } = await axios.get(
      `http://public_html.test/backend/api/productById.php?id=${productId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPhotoGallery = async ({ productId }) => {
  try {
    const { data } = await axios.get(
      `http://public_html.test/backend/api/gallery.php?id=${productId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
// http://public_html.test/backend/api/productById.php?id=754

export const getAllBrand = async ({}) => {
  try {
    const { data } = await axios.get(
      "http://localhost/public_html/backend/api/product_brand.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getAllProduct = async (filters) => {
//   try {
//     const { data } = await axios.get(
//       "http://localhost/public_html/backend/api/product.php",
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
