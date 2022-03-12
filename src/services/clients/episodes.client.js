import axios from "axios";
import * as apiUrls from "../../constants/api.constants";

export default class EpisodesClient {
  static getEpisodeDetails(id) {
    return axios.get(`${apiUrls.tvMazeBaseUrl}/episodes/${id}`);
  }
}
