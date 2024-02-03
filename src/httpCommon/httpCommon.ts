import axios from "axios";

export const HttpCommon = axios.create({
  baseURL: "https://portfolio-backend-wmsg.onrender.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
