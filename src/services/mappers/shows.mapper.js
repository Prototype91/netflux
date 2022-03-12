export default class ShowsMapper {
  static mapToHomeShows(shows) {
    return shows.map((item) => ({
      id: item.id,
      image: item.image?.medium,
      name: item.name,
      rating: item.rating.average,
      genres: item.genres,
    }));
  }

  static mapToSearchedShows(shows) {
    return shows.map((item) => ({
      id: item.show.id,
      image: item.show.image?.medium,
      name: item.show.name,
      rating: item.show.rating.average,
      genres: item.show.genres,
    }));
  }
}
