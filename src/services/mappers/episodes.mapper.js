export default class EpisodesMapper {
  static mapToEpisodes(episodes) {
    return episodes.map((item) => ({
      id: item.id,
      image: item.image?.medium,
      name: item.name,
      rating: item.rating.average,
      season: item.season,
    }));
  }

  static mapToEpisode(episode) {
    return {
      id: episode.id,
      image: episode.image?.medium,
      name: episode.name,
      rating: episode.rating.average,
      season: episode.season,
      summary: episode?.summary ?? null,
    };
  }
}
