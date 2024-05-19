import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    // const { data } = await axios.post(
    //   `https://loc.bendeptrai.com/backend/api/login.php?quanly=login`,
    //   { email, password }
    // );
    const { data } = await axios.post(
      `${apiLink.link}/login.php?quanly=login`,
      { email, password }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async ({ email, password, username, ten, phone }) => {
  try {
    // const { data } = await axios.post(
    //   `https://loc.bendeptrai.com/backend/api/register.php?quanly=register`,
    //   { email, password, username, ten, phone }
    // );
    const { data } = await axios.post(
      `${apiLink.link}/register.php?quanly=register`,
      { email, password, username, ten, phone }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
