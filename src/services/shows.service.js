import axios from "axios";
import * as apiUrls from "../constants/api.constants";

export default class ShowsService {
  static getShows() {
    return axios.get(apiUrls.tvMazeUrl);
  }
}
