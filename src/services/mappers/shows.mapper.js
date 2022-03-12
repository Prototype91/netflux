export default class ShowsMapper {
  static mapToShows(shows) {
    return shows.map((item) => ({
      id: item.id,
      image: item.image?.medium,
      name: item.name,
      rating: item.rating.average,
      genres: item.genres,
      summary: item.summary,
    }));
  }

  static mapToShow(show) {
    return {
      id: show.id,
      image: show.image?.medium,
      name: show.name,
      rating: show.rating.average,
      genres: show.genres,
      summary: show.summary ?? null,
    };
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
