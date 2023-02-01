import api from "../service/api";

const getFigs = (params) => {
  return api.get("minifigs/", { params });
};

const getParts = (setNum) => {
  return api.get(`minifigs/${setNum}/parts/`);
};

export { getFigs, getParts };
