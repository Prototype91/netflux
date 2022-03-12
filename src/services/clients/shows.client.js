import axios from "axios";
import * as apiUrls from "../../constants/api.constants";

export default class ShowsClient {
  static getShows() {
    return axios.get(`${apiUrls.tvMazeBaseUrl}/shows`);
  }

  static getSearchedShows(query) {
    return axios.get(`${apiUrls.tvMazeBaseUrl}/search/shows?q=${query}`);
  }

  static getShowDetails(id) {
    return axios.get(
      `${apiUrls.tvMazeBaseUrl}/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast`
    );
  }
}
