import store from "../../store/index";
import * as type from "../../store/mutationTypes/types";

export default class ShowsRepository {
  static storeShows(shows) {
    store.dispatch({
      type: type.Add,
      shows,
    });
  }

  static storeComment(comment) {
    store.dispatch({
      type: type.Add,
      comment,
    });
  }
}
