import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.110:3333", // http://<Expo emulator ip>:serverAppPort*
});

export default api;

// * you need to run your app server
