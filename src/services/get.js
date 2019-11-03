import axios from "axios";

export const getData = async () => {
  const url = "https://api.myjson.com/bins/rsal8";
  const response = await axios(url);
  return response.data;
};
