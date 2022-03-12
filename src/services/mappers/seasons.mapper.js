export default class SeasonsMapper {
  static mapToSeasons(seasons) {
    return seasons.map((season) => ({
      id: season.id,
    }));
  }
}
