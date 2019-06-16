import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5f7b1d62d3ce51b0c9acd519770dde07e2dbc26f45501ea0cd2d1c1d009008b4"
  }
});
