import axios from "axios";
import apiLink from "../constants/apiLink";

export const addOrder = async ({ formData }) => {
  try {
    const { data } = await axios.post(
      `https://loc.bendeptrai.com/backend/api/order.php?quanly=order`,
      {
        userId: formData.userId,
        products: formData.products,
        hoten: formData.hoten,
        sodienthoai: formData.phone,
        diachi: formData.diachi,
        email: formData.email,
        httt: formData.httt,
        tamtinh: formData.tamtinh,
        tonggia: formData.tonggia,
        city: formData.city,
        district: formData.district,
        wards: formData.wards,
        phiship: formData.phiship,
        ghichu: formData.ghichu,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
