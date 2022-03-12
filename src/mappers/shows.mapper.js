export default class ShowsMapper {
  static mapToHomeShows(shows) {
    return shows.map((show) => ({
      id: show.id,
      image: show.image?.medium,
      name: show.name,
      rating: show.rating.average,
      genres: show.genres,
    }));
  }
}
