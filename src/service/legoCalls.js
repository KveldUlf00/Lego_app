import api from "../service/api";

const getFigs = (params) => {
  return api.get("minifigs/", { params });
};

export { getFigs };
