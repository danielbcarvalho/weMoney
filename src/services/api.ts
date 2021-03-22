import axios from "axios";

//settando instancia com informações para todas as chamadas
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
