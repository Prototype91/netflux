import axios from "axios";
import * as apiUrls from "../../constants/api.constants";

export default class ShowsClient {
  static getShows() {
    return axios.get(apiUrls.tvMazeBaseUrl);
  }
}
