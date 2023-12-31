import axios from "axios";
import { BASE_URL } from "../consts/url";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const responce = await axios.get(BASE_URL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return responce;
  }

  static async getPostById(id) {
    const responce = await axios.get(`${BASE_URL}/${id}`);
    return responce;
  }

  static async getCommentsById(id) {
    const responce = await axios.get(`${BASE_URL}/${id}/comments`);
    return responce;
  }
}
