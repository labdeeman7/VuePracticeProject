import axios from "axios";
import Config from "./Config";

const UserService = {
  login: login,
  getUserFromLocalStorage: getUserFromLocalStorage
};

async function login(data) {
  login = await axios.post("https://jsonplaceholder.typicode.com/users", data);

  return login;
} //login

function getUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem(Config.local_storage.user));
} //getUserFromLocalStorage

export default UserService;
