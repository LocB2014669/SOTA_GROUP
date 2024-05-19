import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      `${apiLink}/login.php?quanly=login`,
      { email, password }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async ({ email, password, username, ten, phone }) => {
  try {
    const { data } = await axios.post(
      `${apiLink}/register.php?quanly=register`,
      { email, password, username, ten, phone }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
