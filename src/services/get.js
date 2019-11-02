import axios from "axios";

export const getPhotograph = async () => {
  const url = "http://localhost:4003/PHOTOGRAPH";
  const response = await axios(url);
  return response.data;
};

export const getDevelopment = async () => {
  const url = "http://localhost:4003/DEVELOPMENT";
  const response = await axios(url);
  return response.data;
};
