import axios from "axios";
import { BASE_URL } from "../consts/url";

export default class PostService {
  static async getAll() {
    try {
      const responce = await axios.get(BASE_URL);
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}
