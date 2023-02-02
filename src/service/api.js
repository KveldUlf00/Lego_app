import axios from "axios";

const REBRICKABLE_PRIVATE_KEY = "019d6a439bc08421e49a9c0dd34b8b77";

const api = axios.create({
  baseURL: "https://rebrickable.com/api/v3/lego/",
  headers: {
    Authorization: `key ${REBRICKABLE_PRIVATE_KEY}`,
  },
});

export default api;
