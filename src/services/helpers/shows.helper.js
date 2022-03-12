export default class ShowsHelper {
  static getSummary(summary) {
    return summary
      .replaceAll("<p>", "")
      .replaceAll("</p>", "")
      .replaceAll("<b>", "")
      .replaceAll("</b>", "");
  }
}
