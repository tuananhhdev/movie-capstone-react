import axios from "axios";
import { getLocal } from "../utils/Local";
let dataUser = getLocal();
// console.log(dataUser.accessToken);
export const API = axios.create({
  // đoạn đầu URL sử dụng chung của tất cả các request
  baseURL: "https://movienew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY`,
    Authorization: `Bearer ${dataUser ? dataUser.accessToken : null}`,
  },
  timeout: 15000,
});
